# Ubuntu 去除加密的 Home 目录

参考： http://askubuntu.com/questions/4950/how-to-stop-using-built-in-home-directory-encryption

1. 备份
  ```
  sudo cp -rp /home/<your_username> /home/<your_username>.backup
  ```

2. 进入root
  ```
  sudo su root
  ```

3. 卸载
  ```
  cd /home
  umount /home/<your_username>
  rm -rf /home/<your_username>
  rm -rf /home/.ecryptfs/<your_username>
  ```

4. 卸载ecryptfs
  ```
  apt-get remove ecryptfs-utils libecryptfs0
  ```

5. 还原目录
  ```
  mv /home/<your_username>.backup /home/<your_username>
  ```

6. 重启
  ```
  reboot
  ```

7. 删除遗留目录
  ```
  rm -rf ~/.Private
  rm -rf ~/.ecryptfs
  ```

