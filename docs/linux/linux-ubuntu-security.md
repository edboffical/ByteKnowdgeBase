# Ubuntu 安全配置

## SSH加固

编辑 `/etc/ssh/sshd_config` 修改如下配置：

```
PasswordAuthentication no # 禁止密码登陆
PermitRootLogin no # 禁止root登陆
```

可通过以下shell修改：

```shell
sudo sed -i 's/^\(#\?\s*PasswordAuthentication\s.*\)/PasswordAuthentication no/g' /etc/ssh/sshd_config
sudo sed -i 's/^\(#\?\s*PermitRootLogin\s.*\)/PermitRootLogin no/g' /etc/ssh/sshd_config
sed -n -e '/^\(#\?\s*PasswordAuthentication\s.*\)/p' -e '/^\(#\?\s*PermitRootLogin\s.*\)/p' /etc/ssh/sshd_config
```

shell的最后一行输出了修改后的配置，请检查修改是否成功！

配置需在SSH服务重启后才能生效：`service ssh restart`。

## 防火墙配置

### 添加iptables规则

以下为示例的iptables规则，请根据实际情况修改：

```shell
iptables -P INPUT ACCEPT
iptables -F INPUT
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -p TCP --dport 80 -j ACCEPT
iptables -A INPUT -p TCP -s {JUMPSERVER_IP} --dport 22 -j ACCEPT
iptables -A INPUT -p TCP -s {ZABBIX_SERVER_IP} --dport 10050 -j ACCEPT
iptables -A INPUT -p icmp -s {JUMPSERVER_IP} -j ACCEPT
iptables -P INPUT DROP
```

建议：SSH 22端口的规则，设置2条及以上的规则，以免JUMPSERVER的单点故障，导致无法SSH登陆。

### iptables规则自动保存/加载：

```bash
iptables-save > /etc/iptables.rules
```

### 网卡启动自动加载脚本`/etc/network/if-pre-up.d/iptables`

```bash
echo '#!/bin/sh
iptables-restore < /etc/iptables.rules
exit 0' > /etc/network/if-pre-up.d/iptables
```

### 网卡卸载自动保存脚本`/etc/network/if-post-down.d/iptables`

```bash
echo '#!/bin/sh
iptables-save -c > /etc/iptables.rules
if [ -f /etc/iptables.rules ]; then
  iptables-restore < /etc/iptables.rules
fi
exit 0' > /etc/network/if-post-down.d/iptables
```

### 加可执行权限：

```bash
sudo chmod +x /etc/network/if-post-down.d/iptables
sudo chmod +x /etc/network/if-pre-up.d/iptables
```
