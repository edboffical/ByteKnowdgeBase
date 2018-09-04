# Iptables 使用指南

## 常用命令

* 查看INPUT的规则，并显示行号
  ```bash
  iptables -L INPUT --line-numbers
  ```
* 显示详细规则
  ```bash
  iptables -L -nv
  ```

* 删除规则
  ```bash
  iptables -D INPUT 4
  ```

* 禁止IP
  ```bash
  iptables -I INPUT -s {IP} -j DROP
  ```
* 允许来自某个IP访问某个TCP端口
  ```bash
  iptables -A INPUT -p TCP -s {SOURCE_IP} --dport {DEST_PORT} -j ACCEPT
  ```

## 常用配置

```bash
iptables -P INPUT ACCEPT
iptables -F
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -p TCP --dport 80 -j ACCEPT
iptables -A INPUT -p TCP --dport 22 -j ACCEPT
iptables -A INPUT -p icmp -j ACCEPT
iptables -P INPUT DROP
```

