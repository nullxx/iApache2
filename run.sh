#!/bin/bash
P_DIR="$(cd -P -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)" # will be executed from service
cd $P_DIR
/usr/bin/nodejs ./bin/www