#! /bin/bash

# 下载 Python 2.7.8 的源代码
wget https://www.python.org/ftp/python/2.7.8/Python-2.7.8.tgz

# 解压缩源代码
tar -xvf Python-2.7.8.tgz

# 进入源代码目录
cd Python-2.7.8

# 编译并安装 Python
./configure && make && make install
