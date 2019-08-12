#!/usr/bin/env bash

test -e dist/index.js || npm run build-server && npm run build-client && npm run watch | npm run hot-reload