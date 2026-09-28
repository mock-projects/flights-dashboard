import {useState} from 'react'
import type {Flight} from '../types/flight.d.mts'
import {FlightCard} from './FlightCard.tsx'
import {
	cleanFlightStatus,
	getFlightDurationString,
	getTimeString,
} from '../utilities/flightUtils.mts'

interface FlightDetailsProps {
	flight: Flight
	onBackClick: ( ) => void
}

const FlightSummary = ({flight}: {flight: Flight}) => {
	const [flightStatus] = useState(cleanFlightStatus(flight.flight_status))
	const [flightStatusDisplay] = useState(flightStatus?.replaceAll('-', ' ') ?? null)

	const [currentDepartureTime] = useState(getTimeString(flight.current_departure_time))
	const [scheduledDepartureTime] = useState(getTimeString(flight.scheduled_departure_time))
	const [currentArrivalTime] = useState(getTimeString(flight.current_arrival_time))
	const [scheduledArrivalTime] = useState(getTimeString(flight.scheduled_arrival_time))

	const [flightDuration] = useState(getFlightDurationString(flight.flight_duration))

	return (
		<FlightCard title='Flight Summary'>
			<p>Airline: {flight.airline}</p>

			<p>
				Departure Time:{' '}
				{currentDepartureTime}
				{flightStatus === 'delayed' && (
					<span>{' '}(was {scheduledDepartureTime})</span>
				)}
			</p>

			<p>
				Arrival Time:{' '}
				{flightStatus === 'cancelled' ? '-' : currentArrivalTime}
				{flightStatus === 'delayed' && (
					<span>{' '}(was {scheduledArrivalTime})</span>
				)}
			</p>

			<p>Flight Status: {flightStatusDisplay}</p>
			<p>Flight Duration: {flightDuration}</p>
		</FlightCard>
	)
}

const OriginDetailsCard = ({flight}: {flight: Flight}) => {
	return (
		<FlightCard title={'Origin Airport'}>
			<p>Airport Name: {flight.origin_name}</p>
			<p>Terminal: {flight.origin_terminal}</p>
			<p>Gate: {flight.origin_gate}</p>
		</FlightCard>
	)
}

const DestinationDetailsCard = ({flight}: {flight: Flight}) => {
	return (
		<FlightCard title={'DestinationAirport'}>
			<p>Airport Name: {flight.destination_name}</p>
			<p>Terminal: {flight.destination_terminal}</p>
			<p>Gate: {flight.destination_gate}</p>
		</FlightCard>
	)
}

const FlightDetails = ({flight, onBackClick}: FlightDetailsProps) => {
	return (
		<div className='flight-details'>
			<nav>
				<button
					onClick={onBackClick}
					className='button-back'
				>
					Back
				</button>
			</nav>

			<header className='flight-details-header'>
				<h2>Flight {flight.flight_number}</h2>
				<h2>{flight.origin_code} - {flight.destination_code}</h2>
			</header>

			<div className='flight-details-body'>
				<FlightSummary flight={flight} />
				<OriginDetailsCard flight={flight} />
				<DestinationDetailsCard flight={flight} />
			</div>
		</div>
	)
}

export {FlightDetails}
