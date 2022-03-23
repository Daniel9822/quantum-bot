#!/usr/bin/bash

clear
pkg update && pkg upgrade
apt install nodejs
apt install ffmpeg
pkg install imagemagick
pkg install yarn
yarn

echo ""
echo ""
echo "Use : npm start para ejecutar al bot :D"
echo ""
echo ""
echo ""
