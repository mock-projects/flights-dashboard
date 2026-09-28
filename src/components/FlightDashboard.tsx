import {Fragment, useEffect, useState} from 'react'
import type {Flight} from '../types/flight.d.mts'
import {fetchFlightResults} from '../utilities/fetchResults.mts'
import {getFlightStatuses, getTimeString} from '../utilities/flightUtils.mts'
import {Header} from './Header.tsx'

interface FlightDashboardProps {
	setSelectedFlight: (flight: Flight) => void
}

const FlightDashboard = ({setSelectedFlight}: FlightDashboardProps) => {
	const [flights, setFlights] = useState<Flight[ ]>([ ])
	const [viewId, setViewId] = useState(0)

	useEffect(( ) => {
		const loadFlights = async ( ) => {
			const flights = await fetchFlightResults( )
			setFlights(flights)
		}
		void loadFlights( )
	}, [ ])

	return (
		<Fragment>
			<Header
				viewId={viewId}
				setViewId={setViewId}
			/>
			<section className='dashboard-container'>
				{flights.length > 0 && (
					<table>
						<thead>
							<tr>
								<th scope='col'>Flight Number</th>
								<th scope='col'>Airline</th>
								<th scope='col'>Origin</th>
								<th scope='col'>Destination</th>
								<th scope='col'>Origin Gate</th>
								<th scope='col'>Destination Gate</th>
								<th scope='col'>Current Departure</th>
								<th scope='col'>Current Arrival</th>
								<th scope='col'>Status</th>
							</tr>
						</thead>
						<tbody>
							{flights.map((flight) => {
								const flightStatuses = getFlightStatuses(flight)
								return (
									<tr
										key={flight.flight_id}
										onClick={( ) => setSelectedFlight(flight)}
									>
										<td>{flight.flight_number}</td>
										<td>{flight.airline}</td>
										<td>{flight.origin_code}</td>
										<td>{flight.destination_code}</td>
										<td>{flight.origin_gate}</td>
										<td>{flight.destination_gate}</td>
										<td>{getTimeString(flight.current_departure_time)}</td>
										<td>{getTimeString(flight.current_arrival_time)}</td>
										<td>{flightStatuses.join(', ')}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				)}
			</section>
		</Fragment>
	)
}

export {FlightDashboard}
