#! /bin/bash

# 下载最新版本的 JDK 安装包
wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "https://download.oracle.com/otn-pub/java/jdk/14.0.1+7/664493ef4a6946b186ff29eb326336a2/jdk-14.0.1_linux-x64_bin.tar.gz"

# 解压缩安装包
tar -xvf jdk-14.0.1_linux-x64_bin.tar.gz

# 将 JDK 的 bin 目录添加到 PATH 环境变量中
echo 'export PATH=$PATH:/jdk-14.0.1/bin' >> ~/.bashrc

# 使新的环境变量生效
source ~/.bashrc
