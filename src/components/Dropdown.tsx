import {getDisplayString} from '../utilities/miscUtils.mts'
import type {ChangeEvent, Dispatch, SetStateAction} from 'react'

interface DropdownProps<T extends string> {
	label: string
	options: readonly T[ ]
	value: T | undefined
	setValue: Dispatch<SetStateAction<T | undefined>>
}

/**
 * Renders a dropdown component.
 */
const Dropdown = <T extends string,>({
	label,
	options,
	value,
	setValue,
}: DropdownProps<T>) => {
	const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const option = options.find((item) => item === event.target.value)
		setValue(option)
	}
	return (
		<div className='dropdown'>
			<label>{label}</label>
			<select
				value={value}
				onChange={onChange}
				className='custom-select'
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{getDisplayString(option)}
					</option>
				))}
			</select>
		</div>
	)
}

export {Dropdown}
