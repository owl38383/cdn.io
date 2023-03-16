#!/bin/bash

# Stop and remove all containers
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)

# Remove all images
docker rmi $(docker images -q)

# Uninstall Docker
apt-get remove docker \
                docker-engine \
                docker.io \
                containerd \
                runc

# Uninstall Docker Compose
pip uninstall docker-compose

# Delete any remaining Docker files
rm -rf /var/lib/docker

# 卸载Docker
sudo apt-get remove docker docker-engine docker.io

# 卸载Docker Compose
sudo rm /usr/local/bin/docker-compose
