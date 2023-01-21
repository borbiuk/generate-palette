# generate-palette

Generate collor palette by input color and step:


## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install generate-palette
```

### TypeScript

This module includes a [TypeScript](https://www.typescriptlang.org/)
declaration file to enable auto complete in compatible editors and type
information for TypeScript projects. This module depends on the Node.js
types, so install `@types/node`:

```sh
$ npm install @types/node
```


## API

```js
var generatePalette = require('generate-palette')
```

### generatePalette(color, [step])

**Returns a object that contains color palette.**

Parameters:
- `color` - The domain color of palett in HEX format.
- `step` - Ths step of concentraition in palette.
  It should be between 0 and 100.


## Examples

### Example of usage
```js
var generatePalette = require('generate-palette')

var palette = generatePalette('#ffdd00', 10)
```
<img src="palette.png" alt="palette" width="320px"/>

### Example of CLI usage
```sh
node example.js --color '#87CEEB' --step '10'
```
