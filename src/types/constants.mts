const AIRPORT_CODE = 'XYZ' as const

const filterOptions = [
	'all-flights',
	'arriving-flights',
	'departing-flights',
] as const

type FilterOption = (typeof filterOptions)[number]

export {
	AIRPORT_CODE,
	filterOptions,
}
export type {
	FilterOption,
}
