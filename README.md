wp-detect
=========

A simple CLI to detect WordPress plugins and themes at a given URL.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wp-detect.svg)](https://npmjs.org/package/wp-detect)
[![Downloads/week](https://img.shields.io/npm/dw/wp-detect.svg)](https://npmjs.org/package/wp-detect)
[![License](https://img.shields.io/npm/l/wp-detect.svg)](https://github.com/rheinardkorf/wp-detect/blob/master/package.json)

<!-- toc -->
- [wp-detect](#wp-detect)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g wp-detect
$ wp-detect COMMAND
running command...
$ wp-detect (-v|--version|version)
wp-detect/0.1.0 darwin-arm64 node-v15.8.0
$ wp-detect --help [COMMAND]
USAGE
  $ wp-detect COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
```
scan given URL for plugins and themes

USAGE
  $ wp-detect [URL]

OPTIONS
  -f, --format=simple|json  [default: table] format for output
  -h, --help                show CLI help
  -v, --version             show CLI version
  --url=url                 url to scan
```
<!-- commandsstop -->
