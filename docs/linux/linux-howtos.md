# Linux HowTos

以下内容基于 Ubuntu Server。

## 进程

### 如何批量杀死含某个关键词的进程？

```bash
ps -ef | grep PS_KEYWORDS | grep -v grep | cut -c 9-15 | xargs kill -9
```

## 用户帐号篇

### 如何查看用户所在的用户组？

```bash
groups USERNAME
```

### 如何创建新用户帐号？

```bash
useradd USERNAME -m -s /bin/bash
```

参数：
  * `-m`: 建立home目录
  * `-s`: 指定shell

### 如何设置用户帐号密码？

```bash
passwd USERNAME
```

### 如何赋予新用户 sudo 权限？

将用户加入sudo用户组即可。

```bash
sudo usermod -a -G sudo USERNAME
```

参数：

  * `-a`: Append模式
  * `-G`: 指定要增加的group

### 如何生成 SSH Key ？

```bash
ssh-keygen -t rsa -C "user@machine"
```

生成的 SSH KEY 在目录`~/.ssh/`下。

### 如何复制本机的 SSH 公钥到远程主机？

使得本机可以免密码登陆远程主机。

```
ssh-copy-id [-i [identity_file]] [user@]machine
```

## 时区

### 如何设置服务器时区？

```bash
sudo timedatectl set-timezone Asia/Shanghai
```

参考：

[How To Set Up Timezone and NTP Synchronization on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-timezone-and-ntp-synchronization-on-ubuntu-14-04-quickstart)

## 网络

### 获得服务器的外网IP？

```bash
curl cip.cc # 或 curl ifconfig.me
```

### 如何查看网卡MAC地址？

```bash
ip link
```

会输出如下信息：
```
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
    link/ether 08:00:27:73:c7:87 brd ff:ff:ff:ff:ff:ff
3: enp0s8: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 08:00:27:83:88:34 brd ff:ff:ff:ff:ff:ff
```

### 如何修改网卡名称？

网卡我们习惯上会用eth0, eth1...ethN的方式来命名，但最新的ubuntu server对网卡的命名会出来一些奇怪的名字，比如`enp0s3`。如果你看着不爽，就可以给他改名。改名的步骤如下：

1. 编辑`/etc/default/grub`，修改：
```
GRUB_CMDLINE_LINUX=""
```
为
```
GRUB_CMDLINE_LINUX="net.ifnames=0 biosdevname=0"
```

2. `sudo update-grub`

3. 编辑，`/etc/network/interfaces`，你会看到如下类似内容：

```
auto lo
iface lo inet loopback

auto enp0s3 
iface enp0s3 inet dhcp
```
将奇怪的网卡名`enp0s3`修改为`eth0`。如果还有第二块网卡那么，第二块网卡为`eth1`。

### 如何将网卡设置为静态IP ?

编辑`/etc/network/interfaces`，下例把`eth1`网卡IP设置为了`192.169.59.11`。

```
iface eth1 inet static
address 192.168.59.11
gateway 192.168.59.1
netmask 255.255.255.0
```

重启：`sudo reboot`


## 常用运维工具

### 如何查看网卡带宽情况？

```bash
apt-get install nload
nload -u M
```

### 如何查看IO情况？

```bash
apt-get install iotop
iotop -oP
```