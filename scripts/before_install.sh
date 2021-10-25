#!/bin/bash
cd /home/ec2-user/server
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
yum -y install nodejs npm
sudo npm install yarn -g
yarn -v
sudo yarn global add pm2