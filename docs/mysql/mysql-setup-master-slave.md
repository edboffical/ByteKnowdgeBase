# MySQL 主从同步配置

XtraBackup 为 MySQL 的备份工具，支持热备、增量备份等特性，具体特性参见[官网](https://www.percona.com/software/mysql-database/percona-xtrabackup)。

## 安装 XtraBackup

在 Master、Slave 服务器上各自安装 XtraBackup。 

```bash
wget https://repo.percona.com/apt/percona-release_0.1-4.$(lsb_release -sc)_all.deb
sudo dpkg -i percona-release_0.1-4.$(lsb_release -sc)_all.deb
sudo apt-get update
sudo apt-get install percona-xtrabackup-24
```

参考 [Installing Percona XtraBackup on Debian and Ubuntu](https://www.percona.com/doc/percona-xtrabackup/LATEST/installation/apt_repo.html)。


## Master 节点配置

**开启 MySQL Binlog**

编辑 `/etc/mysql/mysql.conf.d/mysqld.cnf`，配置 `log-bin` 以及 `server-id` 参数：

```
log-bin            = /var/log/mysql/mysql-bin.log
server-id          = 1
```

参考：[Setting the Replication Master Configuration](https://dev.mysql.com/doc/refman/5.7/en/replication-howto-masterbaseconfig.html)

**重启MySQL**

```bash
sudo service mysql restart
```

**检查 Binlog 是否成功开启**

进入 MySQL 后执行：

```
show variables like "log_bin";
```

看到以下输出，表示配置成功：

```
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| log_bin       | ON    |
+---------------+-------+
1 row in set (0.00 sec)
```

**创建 MySQL 同步账号**

进入 MySQL 后执行：

```sql
GRANT REPLICATION SLAVE ON *.* to REPL_USER@'SLAVE_IP' IDENTIFIED BY 'REPL_PASSWORD';
```

注意：在语句执行之前，请替换`REPL_USER`、`SLAVE_IP`、`REPL_PASSWORD`。

## 备份 Master 数据

**全量备份：**

```bash
mkdir ~/backup
sudo xtrabackup --backup --user=root --password='YOUR_PASSWORD' --target-dir=~/backup/mysql-backup
sudo xtrabackup --prepare --user=root --password='YOUR_PASSWORD' --target-dir=~/backup/mysql-backup
```
::: warning
此操作在 Master 服务器上，请确保你的备份目录所在的磁盘，空间是足够的！
:::

** 将备份数据复制到 Slave 服务器：**

```bash
sudo chown -R $(id -u):$(id -g) ~/backup/mysql-backup
rsync -avpP ~/backup/mysql-backup root@SLAVE_IP:backup/mysql-backup
```

## 配置 MySQL Slave

**停止 MySQL**

```bash
sudo service mysql stop
```

**配置`server-id`**

编辑`/etc/mysql/mysql.conf.d/mysqld.cnf`，配置：

```
server-id = 2
read-only=1
```

**重置数据**

```
sudo mv /var/lib/mysql  ~/backup/mysql-old-bak
sudo xtrabackup --move-back --target-dir=~/backup/mysql-backup
sudo chown -Rf mysql:mysql /var/lib/mysql
```

**启动 MySQL**

```
sudo service mysql start
```

**查看 Binlog 位置信息**

```bash
cat ~/backup/mysql-backup/xtrabackup_binlog_info
```
显示如下信息：

```
mysql-bin.000001   107
```

即下个操作步骤的`{MASTER_LOG_FILE}`、`{MASTER_LOG_POS}`参数的值。


**Slave 连接 Maser**

进入 Mysql 后执行：

```sql
CHANGE MASTER TO MASTER_HOST='{MASTER_IP}',
    MASTER_USER='{REPL_USER}',
    MASTER_PASSWORD='{REPL_PASSWORD}',
    MASTER_LOG_FILE='{MASTER_LOG_FILE}',
    MASTER_LOG_POS={MASTER_LOG_POS};
```

启动 Slave：

```sql
start slave;
```

# 参考文献

  * [How to setup a slave for replication in 6 simple steps with Percona XtraBackup](https://www.percona.com/doc/percona-xtrabackup/LATEST/howtos/setting_up_replication.html)