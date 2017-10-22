#!/bin/bash

env=test
map=no
while getopts e:m option;
do
  case $option in
    e)
      echo "option:e, value $OPTARG"
      if [[ $OPTARG == "dev" || $OPTARG == "test" ]]; then
      env=$OPTARG
      else
      echo "the -e should use dev or test"
      exit 1
      fi
      ;;
    m)
      echo "option:m"
      map=yes
      ;;
    \?)  
      echo "-e for build env; -m for build use sourcemap"
      exit 1
      ;;
    esac
done        

echo 'gulp 打包压缩'
echo 'gulp'
if [[ $map == "yes" ]]; then
gulp --usemap yes
else 
gulp
fi

echo 'copy dir'
cd output

PUSH_DIR='everest-mweb'

rm -rf ../$PUSH_DIR/*

\cp -r -a . ../$PUSH_DIR

echo 'push------'
npm run gulp$env

echo 'remove dir'
rm -rf ../$PUSH_DIR
rm -rf ../tmp
rm -rf ../index.html.tmp
