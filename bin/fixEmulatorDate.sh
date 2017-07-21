#!/usr/bin/env bash

echo -n "Fixing emulator date..."
adb shell "date `date +%m%d%H%M%Y.%S`"
echo "done."
