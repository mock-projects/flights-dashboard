import type {FlightStatus} from '../types/constants.mts'
import type {Flight} from '../types/flight.d.mts'

const cleanFlightStatus = (
	flightStatus: string,
): FlightStatus | null => {
	let cleanedStatus: string | null = flightStatus
	cleanedStatus = cleanedStatus.toLowerCase( )

	if (
		cleanedStatus !== 'on-time'
		&& cleanedStatus !== 'delayed'
		&& cleanedStatus !== 'cancelled'
		&& cleanedStatus !== 'gate-changed'
	) return null

	return cleanedStatus
}

const getFlightDurationString = (flightDuration: number): string => {
	const hours = Math.floor(flightDuration / 60)
	const minutes = flightDuration % 60
	return `${hours}h ${minutes}m`
}

const getFlightStatuses = (flight: Flight): FlightStatus[ ] => {
	const primaryStatus = cleanFlightStatus(flight.flight_status)
	if (primaryStatus == null) throw 'status is null'
	const status: FlightStatus[ ] = [primaryStatus]

	if (flight.gate_changed) {
		if (primaryStatus === 'on-time') status[0] = 'gate-changed'
		else status.push('gate-changed')
	}

	return status
}

const getTimeString = (datetime: string): string => {
	const date = new Date(datetime)
	const formattedTime = date.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
	})
	return formattedTime
}

export {
	cleanFlightStatus,
	getFlightDurationString,
	getFlightStatuses,
	getTimeString,
}
