const AIRPORT_CODE = 'XYZ' as const

const flightStatuses = [
	'on-time',
	'gate-changed',
	'delayed',
	'cancelled',
] as const

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

type FlightStatus = (typeof flightStatuses)[number]
type FilterOption = (typeof filterOptions)[number]
type SortOption = (typeof sortOptions)[number]

export {
	AIRPORT_CODE,
	flightStatuses,
	filterOptions,
	sortOptions,
}
export type {
	FlightStatus,
	FilterOption,
	SortOption,
}
