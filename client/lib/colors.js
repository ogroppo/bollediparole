LabelColor = function(string){
	if(!string)
		return

	return getHslColor(string, 100, 90)
};

NameColor = function(string){
	if(!string)
		return 'lightGrey'

	return getHslColor(string, 100, 70)
};

function getHslColor(string, saturation, luminosity){
	if(!string)
		return ''

	let hue = string
		.split('')
		.map(letter => letter.charCodeAt())
		.reduce((acc, code) => acc + code, 0)

	let normalizedHue = hue % 360

	return `hsl(${normalizedHue}, ${saturation}%, ${luminosity}%)`
}
