# Ubuntu HowTos

## 如何更改 Ubuntu 的 APT 源？

由于默认的 Ubuntu 的 APT 源外国外的源，由于网络问题安装软件比较慢，所以需要更换成更快的国内源，下面以[阿里云的源](http://mirrors.aliyun.com/help/ubuntu)为例，替换 Ubuntu 16.04 的源。如使用其他Ubuntu版本的源，在步骤2中，请替换相对应的源地址。

**步骤1：备份原有的源**

```bash
sudo mv /etc/apt/sources.list /etc/apt/sources.list.bak
```

**步骤2：替换**

```bash
echo "
deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse
" | sudo tee /etc/apt/sources.list
```

**步骤3：更新源**

```bash
sudo apt-get update
```

## 如何安装Git、Redis等常用软件？

GIT:
```bash
sudo apt-add-repository ppa:git-core/ppa
sudo apt-get update
sudo apt-get install git
```

Redis Server:
```bash
sudo add-apt-repository ppa:chris-lea/redis-server
sudo apt-get update
sudo apt-get install redis-server
```


Beanstalkd:
```bash
sudo apt-get install beanstalkd
```

Java:
```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

## 如何修改 Ubuntu Server 的 ulimit ?

参考[Raising the Maximum Number of File Descriptors (Open Files) on Ubuntu 14.04 Trusty](https://underyx.me/2015/05/18/raising-the-maximum-number-of-file-descriptors)。


