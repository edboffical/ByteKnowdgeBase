#!/usr/bin/env sh
set -e
vuepress build docs
cd docs/.vuepress/dist
git init
echo kb.bbbbbbbb.org > CNAME
git add -A
git commit -m 'deploy'
git push -f git@github.com:edboffical/ByteKnowdgeBase.git master:gh-pages

cd -