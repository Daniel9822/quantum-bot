#!/usr/bin/bash

clear
pkg install yarn
npm i typescript -g
yarn
tsc -p ./node_modules/@adiwajshing/baileys/

echo "Use : npm start para ejecutar al bot :D"
