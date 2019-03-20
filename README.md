[![NPM version](https://img.shields.io/npm/v/react-native-power-logger.svg)](https://www.npmjs.com/package/react-native-power-logger) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/MarcoTerzoloGit/react-native-power-logger/blob/master/LICENSE) ![](https://img.shields.io/npm/dt/react-native-power-logger.svg) ![](https://img.shields.io/badge/dependencies-no%20dependencies-%231e88e5%20.svg)
# React-native-power-logger  
A react-native specific debugging tools, a lightweight customizable logger to log regular items, the react-native bridge, async storage and array's maps

Example:
```js
import RNlog from 'react-native-power-logger';

RNlog.logStorage(); // See in table format all your react-native async storage
```

## installation
```
$ npm install react-native-power-logger
```

## usage
```js
const RNlog = require('react-native-power-logger');
import RNlog from 'react-native-power-logger';
```

## test on demo project 
1. Install react-native cli
2. open path in terminal and run:
`react-native init demo && cd demo && npm install react-native-power-logger`
3. import and place some code on top of test application to have insight of bridge
```js
import RNlog from 'react-native-power-logger'

RNlog.logBridge();
AppRegistry.registerComponent(appName, () => App);
```

## What can i do?
1. Log React-native bridge, filters can be applied to choose only one way of data flow, specific method or module name
2. Log React-native async storage, dumps all the data from async storage, displayed in table format
3. Log items with customizable prefix, break line, colors and level of importance
4. Log from already in place Array.prototype.map
5. Log from specific Array.prototype.logMap placed in code before being changed in favor of regular "map"

## API
`overrideArraysMap()`
```js

overrideArraysMap()

const testArray = [ "a","b","c" ];

testArray.map(item => item); // every cicle will log current item, index and total array

```

`enableArraysLogMap()`
```js

enableArraysLogMap() //extend native with Array.prototype.logMap

const testArray = [ "a","b","c" ];

testArray.map(item => item); // this will remain a regular map
testArray.logMap(item => item); // every cicle will log current item, index and total array

```

`logStorage()`
```js

logStorage() // returns a table in console with async storage data displayed

```

`logBridge(versus, prefix)` 

`[optional, string] versus: "toJavascript" || "toNative" `
`[optional, string] prefix: "prefix-message" `
```js

logBridge() // returns in console a log of every data exchange in react-native bridge

```

`findInBridge(targets, prefix)` 

`[optional, string[]] targets: ["module name", "method name"] `
`[optional, string] prefix: "prefix-message" `
```js

findInBridge() // returns in console a log of the items we need to look up in bridge

```

`log(target, prefix, level, lineBreak, breakColor)`

`[optional, any ] target: objINeedToLog `
`[optional, string] prefix: "prefix-message" `
`[optional, string] level: "info" || "warn" || "err" `
`[optional, boolean] lineBreak: true `
`[optional, string] breakColor: "#fff" `
```js

log() // returns a customized console.log

```

`info(target)`
```js

info() // returns a console.info

```

`warn(target)`
```js

warn() // returns a console.warn

```

`err(target)`
```js

err() // returns a console.err

```


## warnings
`overrideNativeMap` will override the native `Array.prototype.map`, use it only for debugging. When turned on will dump all items from all the array's maps (frameworks included).

## support
Star the project if you liked! Long live react-native!