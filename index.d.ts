declare namespace generatePalette {
	export interface Palette {
		[concentration: number]: string;
	}
}

/**
 * Get the color palette.
 */
declare function generatePalette(
	color: string,
	step: number
): generatePalette.Palette;

export = generatePalette;
