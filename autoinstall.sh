#!/bin/bash

if [ "${UID}" -ne 0 ]; then
    echo 'You should execute as root'
    exit 1
fi

TMP_DIR=/tmp

D_FILE_OUT=iApache2.tar.gz
D_DIR_OUT=$TMP_DIR/$D_FILE_OUT

E_DIR_OUT=$TMP_DIR/iApache2

TARGET_DIR=/opt/iApache2

SERVICES_DIR=/etc/systemd/system

wget "https://github.com/nullxx/iApache2/archive/master.tar.gz" -O $D_DIR_OUT
mkdir -p $E_DIR_OUT
tar -zxvf $D_DIR_OUT -C $E_DIR_OUT
cd $E_DIR_OUT/iApache2-master
npm install

mkdir -p $TARGET_DIR
mv $E_DIR_OUT/iApache2-master/* $TARGET_DIR/.

cd $TARGET_DIR
ls $TARGET_DIR
SERVICE_TEMPLATE=$(cat iApache2.service.template)

echo "${SERVICE_TEMPLATE/<P_PATH>/$TARGET_DIR}" > $SERVICES_DIR/iApache2.service
sudo chmod 644 $SERVICES_DIR/iApache2.service

echo "CLEANING"
rm -rf $D_DIR_OUT
rm -rf $E_DIR_OUT

echo "SETUP SUCCESS"

echo "To run iApache: sudo systemctl start iApache2"