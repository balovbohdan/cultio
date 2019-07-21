#!/usr/bin/env bash

test -e dist/index.js || npm run build && npm run watch | npm run hot-reload