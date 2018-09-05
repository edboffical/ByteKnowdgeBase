# LNMP Server优化

LNMP = Linux + Nginx + MySQL + PHP

# Nginx优化

编辑`/etc/nginx/nginx.conf`，修改相应配置：

```
worker_processes auto;
events {
    worker_connections 10240;
}
server_tokens off;
client_max_body_size 1024M;
```

# MySQL优化

本文只涉及最基础的优化，深入的优化请参考[MySQL优化指南]()，通常情况下基础的优化，已可满足中小型应用的需求了。请在应用程序安装前，优化配置。

MySQL的默认配置在`/etc/mysql/my.cnf`，修改如下配置：

```
max_connections = N    # 该值的设置，参考下述的说明
log_slow_queries        = /var/log/mysql/mysql-slow.log
long_query_time = 2
innodb_buffer_pool_size = 512M  # 该值的设置，参考下述的说明
innodb_file_per_table = 1
```

`max_connections`数据库的最大连接数。通常一个PHP请求占用1个连接数的话，那么一个拥有最大N个FPM进程的服务器的话，`max_connections`可设置为`N+1`。
当`N<=100`时，可不设置该值。因为`max_connections`的默认值为100。

`innodb_buffer_pool_size` Innodb引擎的Buffer池的大小。该值直接影响基于innodb引擎的数据库查询效率。根据数据库的存储数据大小的容量来估算此值，默认为128M。如果是MySQL专用服务器，可以设置此值为物理内存的80%。如果非MySQL专用服务器，请合理分配该值的大小。

# PHP优化

## FPM的优化

默认的fpm配置文件为：`/etc/php5/fpm/pool.d`。

PHP-FPM主要优化FPM的最大进程数(pm.max_children)。如果服务器为Web 专用服务器，那么可以留有系统运行的内存后，其余都可分配给FPM。非专用服务器，请合理分配各个服务的内存。

Symfony2的应用，一般一个FPM进程占用40M，以此为计算标准的话，如下：

| 内存大小  | 留给系统运行的内存 | 可分配给FPM的内存 | pm.max_children  |
| --------- | ------------------ | ----------------- | ---------------- |
|    1G     |     0.8G           |    0.2G           | 5                |
|    2G     |     1.0G           |    1.0G           | 20               |
|    4G     |     1.0G           |    3.0G           | 60               |
|    8G     |     1.5G           |    6.5G           | 160              |
|   16G     |     2.0G           |    14.0G          | 350              |

如果为FPM专用服务器，那么：
```
pm = static
pm.max_children = N            # N的值参照如上表格的计算方式
pm.max_requests = 5000
request_terminate_timeout = 300
```

否则：
```
pm = dynamic
pm.max_children = N            # N的值参照如上表格的计算方式
pm.start_servers = N * 0.4     # 请直接填写计算后的值
pm.min_spare_servers = N * 0.1 # 请直接填写计算后的值
pm.max_spare_servers = N * 0.5 # 请直接填写计算后的值
pm.max_requests = 5000
request_terminate_timeout = 300
```

## php.ini的优化

默认php.ini配置文件在`/etc/php5/fpm/php.ini`，修改如下配置：

```
expose_php = Off
session.gc_probability = 1
session.gc_divisor = 1000
session.gc_maxlifetime = 1440
post_max_size = 5M
max_execution_time = 300
max_input_time = 300
memory_limit = 128M
```