#! /bin/bash

# 下载 JDK 1.8 的安装包
wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "https://download.oracle.com/otn-pub/java/jdk/8u251-b08/3d5a2bb8f8d4428bbe94aed7ec7ae784/jdk-8u251-linux-x64.tar.gz"

# 解压缩安装包
tar -xvf jdk-8u251-linux-x64.tar.gz

# 将 JDK 的 bin 目录添加到 PATH 环境变量中
echo 'export PATH=$PATH:/jdk1.8.0_251/bin' >> ~/.bashrc

# 使新的环境变量生效
source ~/.bashrc
