import mobile from '../assets/images/image-hero-mobile.png'
import desktop from '../assets/images/image-hero-desktop.png'
import { useMediaQuery } from 'react-responsive'
import client2 from '../assets/images/client-audiophile.svg'
import client1 from '../assets/images/client-databiz.svg'
import client4 from '../assets/images/client-maker.svg'
import client3 from '../assets/images/client-meet.svg'

const Hero = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
	return (
		<section className='sm:flex flex-row-reverse sm:justify-center sm:w-10/12 sm:mx-auto font-body'>
			<img
				src={isMobile ? mobile : desktop}
				alt=''
				className='sm:w-2/6 self-center sm:h-auto'
			/>
			<div>
				<h1 className='text-4xl font-bold text-black text-center my-7 sm:text-left sm:text-7xl md:text-8xl sm:mt-20'>
					Make {!isMobile && <br />} remote work
				</h1>
				<p className='text-center text-gray font-bold text-sm sm:text-xl sm:text-left sm:w-2/3 sm:my-16'>
					Get your team in sync, no matter your location. Streamline processes,
					create tean rituals, and watch productivity soar.
				</p>
				<a
					href='#'
					className='transition-colors ease-in duration-100 hover:text-black hover:bg-body border-2 bg-black text-body text-md font-bold px-4 py-3 rounded-xl my-6 mx-auto block max-w-max sm:mx-0 sm:mb-16 sm:py-4 sm:px-7'
				>
					Learn more
				</a>
				<div className='flex items-center justify-evenly sm:w-2/3 sm:justify-between'>
					<img className='w-16 sm:w-24' src={client1} alt='' />
					<img className='w-16 sm:w-24' src={client2} alt='' />
					<img className='w-16 sm:w-24' src={client3} alt='' />
					<img className='w-16 sm:w-24' src={client4} alt='' />
				</div>
			</div>
		</section>
	)
}
export default Hero
