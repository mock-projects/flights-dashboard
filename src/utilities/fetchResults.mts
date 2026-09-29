import liveData from '../data/api-data.json' with {type: 'json'}
import type {Flight} from '../types/flight.d.mts'

const fetchFlightResults = async (date?: Date): Promise<Flight[ ]> => {
	date = new Date( )
	const parsedDate = date.toISOString( ).split('T')[0]
	const response = await fetch(`https://api.byteboard.dev/data/flights/${parsedDate}`)
	if (!response.ok) return [ ]
	else return await response.json( )
}

const getApiData = async ( ): Promise<Flight[ ]> => {
	return liveData
}

export {
	fetchFlightResults,
	getApiData,
}
