#!/usr/bin/env bash

set -xe

printf "Ensuring octorun submodule up to date. \n"
git submodule update --init --recursive

printf "Synchronizing content. \n"
for FILE in $(find octorun/docs -name '*.md'); do 
    DEST=content/${FILE#octorun/}
    cp $FILE $DEST
done

printf "Synchronizing static resources. \n"
mkdir -p static/docs/images
for FILE in $(find octorun/docs -name '*.png'); do 
    DEST=static/${FILE#octorun/}
    cp $FILE $DEST
done
