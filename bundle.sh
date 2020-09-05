#!/bin/sh

preact build --template ./src/wcs/index.js --src ./src/wcs --dest wcs

browserify wcs/ssr-build/ssr-bundle.js -o dist/wcs.js
