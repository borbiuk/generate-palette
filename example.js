/**
 * Dependencies.
 */
const minimist = require('minimist');
const process = require('process');

/**
 * Dependencies of generate-palette.
 */
const generatePalette = require('./index');
const printPalette = require('./utils');

// read and verify params
const parameters = minimist(process.argv.slice(2));
const color = parameters['c'] || parameters['color'];
if (!color) {
	throw 'ERROR: Parameter color (-c, --color) is required.';
}
const step = parameters['s'] || parameters['step'] || 10;
const json = parameters['j'] || parameters['json'] || false;

// generate and print palette to console
const palette = generatePalette(color, step);
printPalette(palette, json);
