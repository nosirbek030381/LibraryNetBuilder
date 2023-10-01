import { Email, LocalPhone, LocationOn } from '@mui/icons-material';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const ContactSection = () => {
	const handleSubmit = e => {
		e.preventDefault();
		// Handle form submission logic here

		// Form yuborilgandan so'ng input elementlarni tozalash
		setData(initialData);
	};

	const initialData = {
		name: '',
		phone: '',
		message: '',
	};

	const [data, setData] = useState(initialData);

	const handleChange = e => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	return (
		<Box py={4} bgcolor='#f8f8f8' p={4} mt={10} boxShadow={'8px 8px 8px rgba(0,0,0, .3)'}>
			<Grid container spacing={5} display='flex' alignItems='center' justifyContent='center'>
				<Grid item xs={12} sm={6}>
					<Typography
						marginLeft={2}
						variant='h4'
						component='h2'
						mb={2}
						textTransform={'uppercase'}
						fontWeight={700}
						color={'#001C30'}
					>
						Biz bilan hamkorlik <br />
						qilishdan mamnunmisiz
					</Typography>
					<Typography
						variant='body1'
						mb={2}
						marginLeft={2}
						fontSize={21}
						fontWeight={600}
						textTransform={'uppercase'}
						color={'#E7CEA6'}
					>
						Loyiha bo'yicha telefon qiling
					</Typography>
					<Typography>
						<Typography display={'flex'} alignItems={'center'} marginLeft={2} marginBottom={2}>
							<LocationOn
								sx={{
									fontSize: 40,
									borderRadius: '50%',
									backgroundColor: '#4C4B16',
									color: '#FFD0D0',
								}}
							/>{' '}
							<span style={{ fontSize: 20, fontWeight: 500, marginLeft: '20px', color: '#A76F6F' }}>
								O'zbekiston Respublikasi
							</span>
						</Typography>
						<Typography display={'flex'} alignItems={'center'} marginLeft={2} marginBottom={2}>
							<Email sx={{ fontSize: 40, borderRadius: '50%', color: '#4C4B16' }} />{' '}
							<span style={{ fontSize: 20, fontWeight: 500, marginLeft: '20px', color: '#A76F6F' }}>
								ni761809@gmail.com
							</span>
						</Typography>
						<Typography display={'flex'} alignItems={'center'} marginLeft={2} marginBottom={2}>
							<LocalPhone sx={{ fontSize: 40, borderRadius: '50%', color: '#4C4B16' }} />{' '}
							<span style={{ fontSize: 20, fontWeight: 500, marginLeft: '20px', color: '#A76F6F' }}>
								+998 99-999-99-99
							</span>
						</Typography>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<form onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<TextField
									fullWidth
									label='Name'
									name='name'
									value={data.name}
									onChange={handleChange}
									required
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									label='Phone'
									name='phone'
									value={data.phone}
									onChange={handleChange}
									required
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Message'
									name='message'
									value={data.message}
									onChange={handleChange}
									multiline
									rows={4}
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<Button type='submit' variant='contained' color='primary'>
									Jo'natish
								</Button>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ContactSection;
