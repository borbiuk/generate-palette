/**
 * Module exports.
 * @public
 */
module.exports = printPalette;

/**
 * Extract RGB params from palette
 * @param palette
 * @param concentration
 * @returns {{r: number, b: number, g: number}}
 */
function rgb(palette, concentration) {
	const hex = palette[concentration].replace('#', '');
	return {
		r:  parseInt(hex.substring(0, 2), 16),
		g: parseInt(hex.substring(2, 4), 16),
		b: parseInt(hex.substring(4, 6), 16),
	}
}

/**
 * Write the color palette to console with color representation.
 * @param {Palette} palette
 * @param {boolean} json Print in json format
 */
function printPalette(palette, json) {
	if (json) {
		const gray = `\x1b[38;2;220;220;220m`;
		console.log(`${gray}{`);
		Object.keys(palette)
			.forEach(concentration => {
				const { r, g, b } = rgb(palette, concentration);
				const consoleColor = `\x1b[38;2;${r};${g};${b}m`;
				console.log(`  ${consoleColor}${concentration}: ${palette[concentration]}`);
			});
		console.log(`${gray}}`);
		return;
	}
	
	Object.keys(palette)
		.forEach(concentration => {
			const { r, g, b } = rgb(palette, concentration);
			const consoleColor = `\x1b[38;2;${r};${g};${b}m`;
			console.log(`${consoleColor}${concentration}:\t${palette[concentration]}`);
		});
}
