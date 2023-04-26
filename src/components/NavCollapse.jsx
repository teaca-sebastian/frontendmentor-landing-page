/* eslint-disable react/prop-types */
import arrowdown from '../assets/images/icon-arrow-down.svg'
import arrowup from '../assets/images/icon-arrow-up.svg'
import conditionalClasses from '../utils/functions'
import { useState } from 'react'

const NavCollapse = ({ name, className, children, alignMenu = 'right' }) => {
	const [isOpen, setIsOpen] = useState(true)
	const handleOpen = () => setIsOpen(!isOpen)
	let alignment = `${alignMenu}-0 `
	return (
		<li className={`${className} sm:relative`}>
			<div className='flex items-center cursor-pointer hover:text-black' onClick={handleOpen}>
				{name}
				<img className='px-3' src={isOpen ? arrowup : arrowdown} alt='' />
			</div>
			<ul
				className={conditionalClasses(
					isOpen
						? alignment +
								'sm:bg-white sm:top-16 w-auto sm:pr-14 sm:rounded-xl sm:shadow sm:absolute max-h-0 ease-linear overflow-hidden transition-height duration-300'
						: alignment +
								'sm:bg-white sm:top-16 w-auto sm:pr-14 sm:rounded-xl sm:shadow sm:absolute max-h-80 ease-linear overflow-hidden transition-height duration-300'
				)}
			>
				{children}
			</ul>
		</li>
	)
}
export default NavCollapse
