![node](https://img.shields.io/node/v/node-grep-tool)
[![Build Status](https://travis-ci.org/Oldenborg/node-grep.svg?branch=master)](https://travis-ci.org/Oldenborg/node-grep)
![GitHub last commit](https://img.shields.io/github/last-commit/oldenborg/node-grep)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Oldenborg/node-grep/graphs/commit-activity)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/oldenborg/node-grep/issues/new)

# node-grep
Want a tool for node that works like grep. Here you go.

## The reason for making this
I wanted a tool that I could use in my node applications that works like grep and is just as fast.

## install
```bash
npm install node-grep
```

## Basic usage
```js
const grep = require('node-grep');

grep('translate','./src');
```

## Output
```js
{
  term: 'translate',
  count: 3,
  matches: [
    {
      file: './src/first-file.txt'
      match: 'I want to translate this line, but I have',
      line: "23",
    },
    {
      file: './src/first-file.txt'
      match: 'and then he said, can you translate it for me?',
      line: "27",
    },
    {
      file: './src/another-file.js'
      match: 'const translation = translate("about.introduction.title");',
      line: "144",
    }
  ]
}
```
