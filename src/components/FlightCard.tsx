import {useState} from 'react'
import type {ReactNode} from 'react'

interface FlightCardProps {
	title: string
	children: ReactNode
}

const FlightCard = ({title, children}: FlightCardProps) => {
	const [open, setOpen] = useState(true)
	const indicator = open ? '-' : '+'

	return (
		<section className='flight-card'>
			<details
				open={open}
				onToggle={(event) => {
					setOpen(event.currentTarget.open)
				}}
			>
				<summary className='flight-card-interactive'>
					<h3 className='flight-card-header'>
						<span className='flight-card-indicator'>
							{indicator}
						</span>
						{title}
					</h3>
				</summary>

				<div className='flight-card-content'>
					{children}
				</div>
			</details>
		</section>
	)
}

export {FlightCard}
