# Linux 安全

以下内容基于 Ubuntu Server。

## Linux 配置的安全

### SSH加固

编辑 `/etc/ssh/sshd_config` 修改如下配置：

```
PasswordAuthentication no # 禁止密码登陆
PermitRootLogin no # 禁止root登陆
```

可通过以下 shell 修改：

```shell
sudo sed -i 's/^\(#\?\s*PasswordAuthentication\s.*\)/PasswordAuthentication no/g' /etc/ssh/sshd_config
sudo sed -i 's/^\(#\?\s*PermitRootLogin\s.*\)/PermitRootLogin no/g' /etc/ssh/sshd_config
sed -n -e '/^\(#\?\s*PasswordAuthentication\s.*\)/p' -e '/^\(#\?\s*PermitRootLogin\s.*\)/p' /etc/ssh/sshd_config
```

shell的最后一行输出了修改后的配置，请检查修改是否成功！配置需在SSH服务重启后才能生效：`sudo service ssh restart`。

注意：在禁用`root`登陆之前，请先确认非root账号，能正常登陆服务器。

### 防火墙配置

TODO.

## Nginx 配置的安全

### 静止未解析域名访问

```
echo "
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    return 404;
} " | sudo tee /etc/nginx/sites-available/default
sudo service nginx reload
```

做此配置的目的是，防止IP被未备案的域名恶意解析，导致被工信部封杀。

### 关闭Nginx版本号输出

编辑`/etc/nginx/nginx.conf`，修改配置`server_tokens off`。

```
sudo sed -i "s/\\s*#*\s*server_tokens.*$/\\tserver_tokens off;/" /etc/nginx/nginx.conf
```

配置此配置后，Nginx在Response的时候，不会输出Nginx的具体版本号，以免被攻击扫描器扫描得到Nginx版本号，做定向攻击。

## PHP 配置的安全

### 关闭`expose_php`

关闭此选项后，在 Http Response 的时候，不会输出PHP的版号，以免被攻击扫描器扫描得到Nginx版本号，做定向攻击。PHP 7开始，默认已经关闭此选项。

## PHP 应用部署目录权限的安全

应遵循以下原则，确保PHP程序部署的安全性：

* 原则上一台服务器只部署一个应用；一台服务器上如需部署多个应用的，每个应用应该各自独立用户及用户组，以免相互影响。
* 禁止使用`root`用户部署程序，推荐创建应用部署专属用户名`app`，用户组`app`。
* 推荐应用部署在`/var/www`目录下。
* Nginx / PHP-FPM 进程运行的用户为`www-data`，且该用户的用户组为`www-data`，为了让 Nginx / PHP-FPM 能读取项目文件，应将`www-data`用户，加入`app`用户组。
* 应用的`cli`程序，也应运行在`app`用户下。
* 应用内的缓存、日志等需要写入的目录，设置权限为`770`；缓存文件、日志文件等文件的权限需设置为`777`，以使`cli`及`web`环境下都有权限对此类文件写入。

完整操作如下：

1. 建立`app`用户及用户主目录，并设置登陆`shell`及目录权限
  ```shell
  sudo useradd app -m -s /bin/bash
  sudo chmod 750 /home/app
  ```

2. 创建`/var/www`目录，并设置权限
  ```shell
  sudo mkdir -p /var/www
  sudo chown app:app /var/www
  sudo chmod 750 /var/www
  ```
3. 赋予`www-data`用户读取`app`目录的权限
  ```shell
  sudo usermod -a -G app www-data
  ```
  注：此步操作后，需重启 Nginx / PHP-FPM 服务才能生效：
  ```
  sudo service nginx restart
  sudo service php-fpm restart
  ```

3. 赋予`app`用户 sudo 的权限
  ```shell
  sudo usermod -a -G sudo app
  ```
4. 赋予`app`用户查看系统日志的权限
  ```shell
  sudo usermod -a -G adm app
  ```
  关于`adm`用户组的说明，参见 [Debian default system groups description](http://wiki.gacq.com/index.php/Debian_default_system_groups_description) 。

5. 设置`app`用户的密码，以便 sudo 时使用
  ```shell
  sudo passwd app
  ```

6. 部署应用，并设置用户组及权限 (假设应用名为`myapp`)
   ```shell
   deploy myapp to /var/www/myapp
   sudo chown -Rf app:app /var/www/myapp
   sudo chmod -Rf 750 /var/www/myapp # 如果 myapp 需要在线更新，那么这里权限应设置为 770 
   ```

7. 设置应用的缓存、日志等目录可写。

  需先安装`acl`，`sudo apt-get install acl`。

  ```shell
  su app
  sudo setfacl -dR -m u:www-data:rwX -m u:$(whoami):rwX /var/www/myapp/var
  sudo setfacl -R -m u:www-data:rwX -m u:$(whoami):rwX /var/www/myapp/var
  ```
  假设应用的缓存、日志目录都位于`/var/www/myapp/var`目录下。`setacl`此操作是为了让web及cli环境下，对缓存、日志等目录都可写，关于`setacl`参见：[Setting up or Fixing File Permissions](https://symfony.com/doc/current/setup/file_permissions.html) ，注意`setacl`命令对于 NFS 下的目录无效。

  参考： [setfacl命令](http://man.linuxde.net/setfacl)

## Redis 配置安全

TODO.

## MySQL 配置安全

TODO.

