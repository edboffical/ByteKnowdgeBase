# Redis 多实例启动

此文档基于 Ubuntu Server 14.04。

## 安装Redis

```
sudo add-apt-repository ppa:rwky/redis
sudo apt-get update
sudo apt-get install redis-server
```

## 配置多实例

  * 创建配置文件
  ```
  sudo cp /etc/redis/redis.conf /etc/redis/redis-{PORT}.conf 
  ```

  * 修改配置文件`/etc/redis/redis-{PORT}.conf`
  ```
  pidfile /var/run/redis/redis-{PORT}.pid
  port {PORT}
  logfile /var/log/redis/redis-{PORT}.log
  dbfilename redis-{PORT}.rdb
  ```

  * 创建启动配置文件
  ```
  sudo cp /etc/init.d/redis-server /etc/init.d/redis-server-{PORT}
  ```

  * 修改启动配置文件
    * 找到`/var/run/redis/redis.pid` 修改为 `/var/run/redis/redis-{PORT}.pid`
    * 找到`/etc/redis/redis.conf` 修改为 `/etc/redis/redis-{PORT}.conf`

## 启动实例

  * 启动第2个实例
    ```
    sudo service redis-server-{PORT} restart
    ```

  * 确认第2个实例是否启动
    ```
    ps aux | grep redis
    ```

  * 重启服务器，确认2个实例是否自启动
    ```
    sudo reboot
    ps aux | grep redis
    ```

## 参考资料
  * [The Upstart Event System: What It Is And How To Use It](https://www.digitalocean.com/community/tutorials/the-upstart-event-system-what-it-is-and-how-to-use-it)
  * [How To Configure a Linux Service to Start Automatically After a Crash or Reboot – Part 1: Practical Examples](https://www.digitalocean.com/community/tutorials/how-to-configure-a-linux-service-to-start-automatically-after-a-crash-or-reboot-part-1-practical-examples)
  * [How To Configure a Linux Service to Start Automatically After a Crash or Reboot – Part 2: Reference](https://www.digitalocean.com/community/tutorials/how-to-configure-a-linux-service-to-start-automatically-after-a-crash-or-reboot-part-2-reference)
