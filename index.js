// read and verify params
const parameters = require('minimist')(require('process').argv.slice(2));

const color = parameters['c'] || parameters['color'];
if (!color) {
	throw 'ERROR: Parameter color (-c, --color) is required.';
}
const step = parameters['s'] || parameters['step'] || 10;

// generate palette
const generatePalette = require('./generate-palette');
const result = generatePalette(color, step);

// log result
Object.keys(result)
	.forEach(key => {
		const hex = result[key].replace('#', '');

		const red = parseInt(hex.substring(0, 2), 16);
		const green = parseInt(hex.substring(2, 4), 16);
		const blue = parseInt(hex.substring(4,6), 16);

		const color = `\x1b[38;2;${red};${green};${blue}m`;
		console.log(`${color} ${key}: \t${result[key]}`);
	});
