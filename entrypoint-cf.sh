#!/bin/bash

echo "getting here"
git config --global url."https://".insteadOf git://

npm i
npm start
