/**
 * Module exports.
 * @public
 */
module.exports = printPalette;

/**
 * Write the color palette to console with color representation.
 * @param {Palette} palette
 */
function printPalette(palette) {
	Object.keys(palette)
		.forEach(concentration => {
			const hex = palette[concentration].replace('#', '');

			const r = parseInt(hex.substring(0, 2), 16);
			const g = parseInt(hex.substring(2, 4), 16);
			const b = parseInt(hex.substring(4, 6), 16);

			const consoleColor = `\x1b[38;2;${r};${g};${b}m`;
			console.log(`${consoleColor}${concentration}:\t${palette[concentration]}`);
		});
}
