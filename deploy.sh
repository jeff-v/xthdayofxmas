#!/usr/bin/env sh

set -e

pnpm run build

cd dist

echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:jeff-v/xthdayofxmas.git main:gh-pages

cd -