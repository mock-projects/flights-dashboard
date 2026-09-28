import type {ReactNode} from 'react'

interface FlightCardProps {
	title: string
	children: ReactNode
}

const FlightCard = ({title, children}: FlightCardProps) => {
	return (
		<section className='flight-card'>
			<h3 className='flight-card-header'>{title}</h3>

			<div className='flight-card-content'>
				{children}
			</div>
		</section>
	)
}

export {FlightCard}
