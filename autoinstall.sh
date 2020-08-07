#!/bin/bash

if [ "${UID}" -ne 0 ]; then
    echo 'You should execute as root'
    exit 1
fi

REPO_URL=https://github.com/nullxx/iApache2/archive/master.tar.gz

TMP_DIR=/tmp

D_FILE_OUT=iApache2.tar.gz
D_DIR_OUT=$TMP_DIR/$D_FILE_OUT

E_DIR_OUT=$TMP_DIR/iApache2

TARGET_DIR=/opt/iApache2

SERVICES_DIR=/etc/systemd/system

echo "Downloading repository data"
wget -q -O $D_DIR_OUT "$REPO_URL" 
mkdir -p $E_DIR_OUT
tar -zxf $D_DIR_OUT -C $E_DIR_OUT
cd $E_DIR_OUT/iApache2-master
echo "Running npm install at $E_DIR_OUT/iApache2-master"
npm install > /dev/null

echo "Creating folder $TARGET_DIR"
mkdir -p $TARGET_DIR
echo "Moving $E_DIR_OUT/iApache2-master/ to $TARGET_DIR/"
if [ -n "$(ls -A $TARGET_DIR)" ]; then
   rm -rf $TARGET_DIR/*
fi
mv $E_DIR_OUT/iApache2-master/* $TARGET_DIR/.

cd $TARGET_DIR
echo "Modifying template service file and saving to $SERVICES_DIR/iApache2.service "
SERVICE_TEMPLATE=$(cat iApache2.service.template)

echo "${SERVICE_TEMPLATE/<P_PATH>/$TARGET_DIR}" > $SERVICES_DIR/iApache2.service
echo "Giving 644 permission to $SERVICES_DIR/iApache2.service"
sudo chmod 644 $SERVICES_DIR/iApache2.service

echo "Cleaning temporary directory $D_DIR_OUT"
rm -rf $D_DIR_OUT
echo "Cleaning temporary directory $E_DIR_OUT"
rm -rf $E_DIR_OUT

echo "SUCCESS"
echo "-------- -------- --------"
echo "To run iApache: sudo systemctl start iApache2"
echo "Server at localhost:3000"
echo "To change PORT create .env file at $TARGET_DIR/.env with 'PORT' var"
