import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-close-menu.svg'
import { useState } from 'react'
import conditionalClasses from '../utils/functions'
import NavCollapse from './NavCollapse'
import calendar from '../assets/images/icon-calendar.svg'
import todo from '../assets/images/icon-todo.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleMenu = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className='flex justify-between items-center sm:justify-normal py-5 px-3 sm:px-6 relative'>
			<a href='#' className='translate-y-1 lg:mr-10'>
				<img src={logo} alt='snap' />
			</a>
			<img
				className='cursor-pointer sm:hidden z-10'
				src={isOpen ? close : menu}
				alt='menu'
				onClick={handleMenu}
			/>
			<div
				className={conditionalClasses(
					isOpen
						? 'w-2/3 sm:pt-0 sm:relative sm:justify-between sm:w-full sm:flex sm:h-auto fixed duration-500 transform-none transition ease-in-out top-0 right-0 h-screen font-body bg-body pt-24 px-6'
						: 'w-2/3 sm:pt-0 sm:relative sm:justify-between sm:w-full sm:flex sm:h-auto sm:transform-none duration-500 translate-x-full transition fixed ease-in-out top-0 right-0 h-screen font-body bg-body pt-24 px-6'
				)}
			>
				<ul className='sm:flex gap-4 lg:gap-10 items-center'>
					<NavCollapse
						className='py-2 font-light'
						name='Features'
						alignMenu='right'
					>
						<li className='flex ms-6 my-4 sm:w-full hover:text-black cursor-pointer'>
							<img className='h-5 mr-3 w-5' src={todo} alt='' />
							Todo List
						</li>
						<li className='flex ms-6 my-4 sm:w-full hover:text-black cursor-pointer'>
							<img className='h-5 mr-3 w-5' src={calendar} alt='' />
							Calendar
						</li>
						<li className='flex ms-6 my-4 sm:w-full hover:text-black cursor-pointer'>
							<img className='h-5 mr-3 w-5' src={reminders} alt='' />
							Reminders
						</li>
						<li className='flex ms-6 my-4 sm:w-full hover:text-black cursor-pointer'>
							<img className='h-5 mr-3 w-5' src={planning} alt='' />
							Planning
						</li>
					</NavCollapse>
					<NavCollapse
						className='py-2 font-light'
						name='Company'
						alignMenu='left'
					>
						<li className='ms-6 my-4 sm:w-full hover:text-black cursor-pointer'>History</li>
						<li className='ms-6 my-4 sm:w-full hover:text-black cursor-pointer'>Our Team</li>
						<li className='ms-6 my-4 sm:w-full hover:text-black cursor-pointer'>Blog</li>
					</NavCollapse>
					<li className='py-2 font-light hover:text-black cursor-pointer'>
						<a href=''>Careers</a>
					</li>
					<li className='py-2 font-light hover:text-black cursor-pointer'>
						<a href=''>About</a>
					</li>
				</ul>
				<div className='flex flex-col sm:flex-row text-sm items-center w-100'>
					<a href='#' className='py-3 sm:mr-3 hover:text-black'>
						Login
					</a>
					<a
						href='#'
						className='hover:text-white hover:bg-gray transition-colors ease-in duration-100 rounded-xl border-2 border-gray py-2 w-full text-center sm:px-6'
					>
						Register
					</a>
				</div>
			</div>
		</div>
	)
}
export default Navbar

// TODO:
// custom component for nav links
// add anchor tags in <li>
