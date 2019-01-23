#!/bin/bash
echo work Dir:$(pwd)
cp package.json dist/
echo Copy package.json Complete!
cp -r example/ dist/
for folder in 'standard' 'simple' 'with-antd';do
    rm -r -f dist/example/$folder/.idea dist/example/$folder/node_modules dist/example/$folder/package-lock.json
done
echo Copy example/ Complete!