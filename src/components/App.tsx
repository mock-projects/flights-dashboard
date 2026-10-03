'use client'

import {useState} from 'react'
import type {Flight} from '../types/flight.d.mts'
import {FlightDetails} from './FlightDetails.tsx'
import {FlightDashboard} from './FlightDashboard.tsx'

const App = ( ) => {
	const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null)

	return (
		<main className='main-container'>
			{selectedFlight === null ? (
				<FlightDashboard setSelectedFlight={setSelectedFlight} />
			) : (
				<FlightDetails
					flight={selectedFlight}
					onBackClick={( ) => (setSelectedFlight(null))}
				/>
			)}
		</main>
	)
}

export {App}
