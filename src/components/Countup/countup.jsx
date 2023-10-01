import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PublicIcon from '@mui/icons-material/Public';
import { Box, Typography } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';

const CountUpAnimation = () => {
	return (
		<Box
			id='countUp'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-evenly',
				marginTop: '70px',
				boxShadow: '5px 5px 5px rgba(0, 0, 0, .1)',
				'@media (min-width: 768px)': {
					flexDirection: 'row',
				},
			}}
		>
			<Typography
				variant='h3'
				sx={{
					marginBottom: '10px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<FlipToFrontIcon sx={{ marginBottom: '10px', fontSize: '40px', color: '#E76161' }} />
				<CountUp start={0} end={1000} duration={2.5} separator=',' suffix='+' />
				<Typography
					variant='body1'
					sx={{ marginTop: '20px', fontSize: '15px', textTransform: 'uppercase', color: '#FFABAB' }}
				>
					Kutubxonalar soni
				</Typography>
			</Typography>

			<Typography
				variant='h3'
				sx={{
					marginBottom: '10px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<PeopleAltIcon sx={{ marginBottom: '10px', fontSize: '40px', color: '#E76161' }} />
				<CountUp start={0} end={1000} duration={2.5} separator=',' suffix='+' />
				<Typography
					variant='body1'
					sx={{ marginTop: '20px', fontSize: '15px', textTransform: 'uppercase', color: '#FFABAB' }}
				>
					Obunachilarimiz
				</Typography>
			</Typography>

			<Typography
				variant='h3'
				sx={{
					marginBottom: '10px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<AccountCircleIcon sx={{ marginBottom: '10px', fontSize: '40px', color: '#E76161' }} />
				<CountUp start={0} end={1000} duration={2.5} separator=',' suffix='+' />
				<Typography
					variant='body1'
					sx={{ marginTop: '20px', fontSize: '15px', textTransform: 'uppercase', color: '#FFABAB' }}
				>
					Kitobxonlarimiz
				</Typography>
			</Typography>

			<Typography
				variant='h3'
				sx={{
					marginBottom: '10px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<PublicIcon sx={{ marginBottom: '10px', fontSize: '40px', color: '#E76161' }} />
				<CountUp start={0} end={1000} duration={2.5} separator=',' suffix='+' />
				<Typography
					variant='body1'
					sx={{ marginTop: '20px', fontSize: '15px', textTransform: 'uppercase', color: '#FFABAB' }}
				>
					Mamlakat
				</Typography>
			</Typography>
		</Box>
	);
};

export default CountUpAnimation;
