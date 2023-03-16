#! /bin/bash

# 安装 nginx 所需的依赖软件
yum install -y wget zlib-devel openssl-devel pcre-devel

# 下载最新版本的 nginx 源代码
wget http://nginx.org/download/nginx-1.17.9.tar.gz

# 解压缩源代码
tar -xvf nginx-1.17.9.tar.gz

# 进入源代码目录
cd nginx-1.17.9

# 编译并安装 nginx
./configure && make && make install
