const getDisplayString = (str: string): string => {
	return str
		.toLowerCase()
		.replaceAll('-', ' ')
		.replace(/\b\w/g, (char) => char.toUpperCase())
}

export {getDisplayString}
