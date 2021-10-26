#!/bin/bash
cd /home/ec2-user/server
/usr/local/bin/pm2 kill
/usr/local/bin/pm2 start yarn --name "edgar-web" -- start