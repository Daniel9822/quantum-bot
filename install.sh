#!/usr/bin/bash

clear
pkg update && pkg upgrade
pkg install nodejs
pkg install ffmpeg
pkg install yarn
yarn

echo ""
echo "Use : npm start para ejecutar al bot :D"
echo ""
echo ""
