#!/usr/bin/env bash

echo "Entrer le texte qui sera associé à ce commit."
read commit

echo "Entrer la branche à déployer."
read front_branch

git clone -b $front_branch https://github.com/badjilounes/blabla-movie.git BlablaMovie || exit 1
git clone -b master https://git.heroku.com/badjilounes.git NodeStatic || exit 1

cd BlablaMovie
yarn --network-timeout 1000000

cd ../NodeStatic
rm -rf ./public/*
git add *
git commit -am "Retrait du dernier build"

cd ../BlablaMovie
yarn cache clean

NODE=`which node`
NG=`which ng`
`$NODE --max_old_space_size=4096 $NG build --prod --aot`

rsync -d -r dist/blabla-movie/ ../NodeStatic/public

cd ../NodeStatic
git add *
git commit -am "$commit"
git push origin master

cd ..

rm -rf BlablaMovie NodeStatic
