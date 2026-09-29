const AIRPORT_CODE = 'XYZ' as const

const filterOptions = [
	'all-flights',
	'arriving-flights',
	'departing-flights',
] as const

const sortOptions = [
	'departure-time',
	'arrival-time',
	'flight-status',
	'airline',
	'origin-airport-code',
	'destination-airport-code',
] as const

type FilterOption = (typeof filterOptions)[number]
type SortOption = (typeof sortOptions)[number]

export {
	AIRPORT_CODE,
	filterOptions,
	sortOptions,
}
export type {
	FilterOption,
	SortOption,
}
