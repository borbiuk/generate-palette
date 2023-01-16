const chroma = require('chroma-js');

const generatePalette = (color, step) => {

	if (!chroma.valid(color)) {
		throw 'ERROR: Color should be present in hex format (#000000)';
	}
	if (step <= 0 || step >= 100) {
		throw 'ERROR: Step should be between 0 and 100';
	}

	const colors = [color];
	colors.unshift(
		chroma.scale(['white', color])
			.domain([0, 1])
			.mode("lrgb")
			.colors(50)[1]
	);
	colors.push(
		chroma.scale(['black', color])
			.domain([0, 1])
			.mode("lrgb")
			.colors(10)[1]
	);

	const domain = [
		0,
		...Object.entries({})
			.filter(([key, value]) => value)
			.map(([key]) => parseInt(key) / 100),
		1
	];

	const scale = chroma.scale(colors)
		.domain(domain)
		.mode('lrgb');

	let result = {
		50: color
	};
	for (let i = step; i < 100; i += step) {
		result[i] = scale(i / 100).hex();
	}
	return result;
};

module.exports = generatePalette;
