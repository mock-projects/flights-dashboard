import type {ReactNode} from 'react'

interface HeaderProps {
	onResetClick: ( ) => void
	children: ReactNode
}

/**
 * Renders a header element.
 */
const Header = ({onResetClick, children}: HeaderProps) => {
	return (
		<header>
			<h1 className='company-title'>Flight Dashboard</h1>
			<div className='menu-container'>
				{children}
				<button onClick={onResetClick}>Reset</button>
			</div>
		</header>
	)
}

export {Header}
