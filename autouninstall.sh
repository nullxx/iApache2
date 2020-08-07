#!/bin/bash

if [ "${UID}" -ne 0 ]; then
    echo 'You should execute as root'
    exit 1
fi

SERVICE_NAME=iApache2
SERVICE_PATH=/etc/systemd/system/$SERVICE_NAME.service
echo "Stop $SERVICE_NAME service"
systemctl stop $SERVICE_NAME
echo "Disable $SERVICE_NAME service"
systemctl disable $SERVICE_NAME
echo "Removing $SERVICE_PATH"
rm $SERVICE_PATH
echo "Reloading daemon"
systemctl daemon-reload
systemctl reset-failed
echo "SUCESS"