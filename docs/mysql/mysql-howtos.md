# MySQL HowTos

## 数据导入导出

### 如何导出一张表的数据及结构？

```bash
mysqldump -uroot -p --databases DBNAME --tables table_1 table_2  > db_backup.sql
```

### 如何导出表结构？

```bash
mysqldump -uroot -p --databases DBNAME --no-data > db_tables.sql
```

## 数据库账号及授权

### 如何创建数据库？

```sql
CREATE DATABASE `{DATABASE_NAME}` DEFAULT CHARACTER SET utf8;
```

### 如何创建数据库账号并授权？

```sql
GRANT ALL PRIVILEGES ON `{DATABASE_NAME}`.* TO '{DATABASE_USER}'@'{IP}' IDENTIFIED BY '{PASSWORD}';
```

### 如何创建只读的数据库帐号？

```sql
GRANT SELECT ON *.* TO 'DB_USER'@'IP' IDENTIFIED BY 'DB_PASSWORD';
```

## 数据库管理

### 如何修改数据库账号密码？

```sql
USE mysql;
UPDATE `upser` SET password=PASSWORD("YOUR_DB_PASSWORD") WHERE User='YOUR_DB_USER'; # 请修改你要修改的数据库用户及密码
FLUSH PRIVILEGES;
```

::: warning
MySql 5.7.6 起安装时 root 不设置密码，那么默认会采用 auth_socket 的方式登陆 MySQL。也就是登陆 MySQL 时验证你的 Linux 的当前用户是否为root，如果不是就不能登陆。

这时你按照上述的方式修改密码是不起作用的，需修改密码的同时，把密码的验证方式也修改为`mysql_native_password`：

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_NEW_PASSWORD';
FLUSH PRIVILEGES;
```
:::


### 如何开放 root 帐号给局域网内的服务器访问？

```sql
CREATE USER 'root'@'192.168.1.%'; # 请修改你的内网IP
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.1.%';
```

### 如何不重启数据库，调整慢查询时长参数？

```sql
SET GLOBAL general_log = 'ON';
SHOW GLOBAL variables like 'long_query_time';
SET GLOBAL long_query_time = 1; # 设置为1秒

```

验证:

```sql
SELECT sleep(1.5);
```

查看慢查询日志，看看是否有这条语句。

