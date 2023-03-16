#!/bin/bash

# 获取脚本的参数
action=$1
protocol=$2
port=$3

# 判断参数是否合法
if [[ "$action" != "open" && "$action" != "close" ]]; then
  echo "Invalid action. Usage: $0 open|close protocol port"
  exit 1
fi

if [[ "$protocol" != "tcp" && "$protocol" != "udp" ]]; then
  echo "Invalid protocol. Usage: $0 open|close protocol port"
  exit 1
fi

if [[ ! "$port" =~ ^[0-9]+$ ]]; then
  echo "Invalid port. Usage: $0 open|close protocol port"
  exit 1
fi

# 执行相应操作
if [[ "$action" == "open" ]]; then
  iptables -I INPUT -p $protocol --dport $port -j ACCEPT
elif [[ "$action" == "close" ]]; then
  iptables -I INPUT -p $protocol --dport $port -j REJECT
fi