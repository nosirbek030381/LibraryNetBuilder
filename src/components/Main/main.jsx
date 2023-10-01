import { Box, Typography } from '@mui/material';
import { About, Contact, CountUp, Footer } from '../';
import mainBackground from '../../image/bac.jpg';

const Main = () => {
	return (
		<Box
			component='section'
			className='main-section'
			sx={{
				position: 'relative',
				height: '100vh',
			}}
		>
			<Box
				component='div'
				className='gradient-overlay'
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%)',
				}}
			/>
			<Box
				component='div'
				className='background-image'
				sx={{
					backgroundImage: `url(${mainBackground})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography fontSize={28} color={'white'} textTransform={'uppercase'}>
					Assalomu alaykum
					<Typography fontSize={25} color={'white'}>
						Saytimizga Xush kelibsiz!
					</Typography>
				</Typography>
			</Box>
			<About />
			<CountUp />
			{/* <Team/> */}
			<Contact />
			<Footer />
		</Box>
	);
};

export default Main;
