#!/usr/bin/env bash

node_modules/.bin/supervisor -k -e js,ts,tsx -i node_modules -- dist/server.js