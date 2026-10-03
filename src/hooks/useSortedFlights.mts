import {useMemo} from 'react'
import {AIRPORT_CODE, flightStatuses} from '../types/constants.mts'
import type {FilterOption, FlightStatus, SortOption} from '../types/constants.mts'
import type {Flight} from '../types/flight.d.mts'
import {getFlightStatuses} from '../utilities/flightUtils.mts'

const useSortedFlights = (
	flights: Flight[ ],
	filterOption: FilterOption | undefined,
	sortOption: SortOption | undefined,
): Flight[ ] => {
	const filteredFlights = useMemo(( ) => {
		const filteredFlights = [...flights]
		switch (filterOption) {
			default:
			case ('all-flights'): {
				return filteredFlights
			}
			case ('arriving-flights'): {
				return filteredFlights.filter((flight) => (
					flight.destination_code === AIRPORT_CODE
				))
			}
			case ('departing-flights'): {
				return filteredFlights.filter((flight) => (
					flight.origin_code === AIRPORT_CODE
				))
			}
		}
	}, [flights, filterOption])

	const sortedFlights = useMemo(( ) => {
		switch (sortOption) {
			default:
			case ('departure-time'): {
				return filteredFlights.sort((flightA, flightB) => {
					const timeA = new Date(flightA.current_departure_time)
					const timeB = new Date(flightB.current_departure_time)
					return timeA.getTime( ) - timeB.getTime( )
				})
			}
			case ('arrival-time'): {
				return filteredFlights.sort((flightA, flightB) => {
					const timeA = new Date(flightA.current_arrival_time)
					const timeB = new Date(flightB.current_arrival_time)
					return timeA.getTime( ) - timeB.getTime( )
				})
			}
			case ('flight-status'): {
				const reducer = (score: number, status: FlightStatus,) => {
					score += 2 ** flightStatuses.indexOf(status)
					return score
				}

				return filteredFlights.sort((flightA, flightB) => {
					const flightStatusesA = getFlightStatuses(flightA)
					const flightStatusesB = getFlightStatuses(flightB)

					const scoreA = flightStatusesA.reduce(reducer, 0)
					const scoreB = flightStatusesB.reduce(reducer, 0)
					return scoreB - scoreA
				})
			}
			case ('airline'): {
				return filteredFlights.sort((flightA, flightB) => {
					const airlineA = flightA.airline
					const airlineB = flightB.airline
					return airlineA.localeCompare(airlineB)
				})
			}
			case ('origin-airport-code'): {
				return filteredFlights.sort((flightA, flightB) => {
					const originA = flightA.origin_code
					const originB = flightB.origin_code
					return originA.localeCompare(originB)
				})
			}
			case ('destination-airport-code'): {
				return filteredFlights.sort((flightA, flightB) => {
					const destinationA = flightA.destination_code
					const destinationB = flightB.destination_code
					return destinationA.localeCompare(destinationB)
				})
			}
		}
	}, [filteredFlights, sortOption])

	return sortedFlights
}

export {useSortedFlights}
