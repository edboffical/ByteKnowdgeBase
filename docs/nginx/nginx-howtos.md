# Nginx HowTos

## 配置

### 如何配置根域名跳转到 www 域名？

```nginx
server {
    server_name example.com;
    return 301 $scheme://www.example.com$request_uri;
}
```

### 如何配置 HTTP 跳转到 HTTPS ?

```nginx
server {
    server_name www.example.com;
    return 301 https://$server_name$request_uri;
}
```

### 如何配置访问日志记录 Response Time ？

在`nginx.conf`中添加：

```nginx
http {
    log_format upstream_time '$remote_addr - $remote_user [$time_local] '
                  '"$request" $status $body_bytes_sent '
                  '"$http_referer" "$http_user_agent" '
                  'rt="$request_time" uct="$upstream_connect_time" uht="$upstream_header_time" urt="$upstream_response_time"';
}
```

在需要开启记录 response time 的 server 配置中指定 access_log 的日志格式：

```nginx
server {
    ...
    access_log /spool/logs/nginx-access.log upstream_time;
    ...
}
```

参考：[Ninx Documentation: Configuring Logging](https://www.nginx.com/resources/admin-guide/logging-and-monitoring/)

## 统计分析

### 如果统计访问日志的 IP 数量？

```bash
cat access.log | awk '{print $1}'| uniq -c | wc -l
```

### 如何统计访问最多的前10个 IP ？

```bash
awk '{print $1}' access.log  | sort | uniq -c | sort -nr | head -10  
```