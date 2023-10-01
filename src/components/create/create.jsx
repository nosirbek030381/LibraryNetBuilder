import { AccountCircle, BorderColor, Language, LocalPhone, LocationOn } from '@mui/icons-material';
import { Alert, Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './create.css';

const Create = () => {
	const [loading, setLoading] = useState(false);


	const URL = 'https://konstructor.librarynetbuilder.uz/create';

	const initialData = {
		name: '',
		phone_num: '',
		location: '',
		url: '',
		leader: '',
	};

	const [data, setData] = useState(initialData);
	const [alertSeverity, setAlertSeverity] = useState('');

	const handleChange = e => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);

		const response = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			setAlertSeverity('success');
		} else {
			setAlertSeverity('warning');
		}

		const result = await response.json();

		console.log(result);
		setData(initialData);
		setLoading(false);
	};

	return (
		<>
			{loading ? (
				<div className='preloader-box'>
					<div className='preloader'></div>
				</div>
			) : null}

			{alertSeverity ? (
				<Box mt={10} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
					{alertSeverity === 'success' ? (
						<Alert variant='filled' severity='success'>
							Ro'yxatdan o'tish! Mufaqqiyatli🥳
						</Alert>
					) : (
						<Alert variant='filled' severity='warning'>
							Ro'yxatdan o'tishda xatolik!!💀
						</Alert>
					)}
				</Box>
			) : null}

			<Box mt={10} justifyContent={'center'} alignItems={'center'}>
				<Typography
					fontSize={25}
					textAlign={'center'}
					mb={30}
					color={'#F1C27B'}
					textTransform={'uppercase'}
				>
					Shaxsiy kutubxona saytingizni yarating
					<Grid container justifyContent='center' mt={5}>
						<Grid item xs={12} sm={6}>
							<form onSubmit={handleSubmit}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											fullWidth
											label='Shaxsiy Kutubxonangiz nomini kiriting'
											name='name'
											placeholder='LibraryNetBuilder'
											value={data.name}
											onChange={handleChange}
											required
											InputProps={{
												startAdornment: (
													<InputAdornment position='start'>
														<BorderColor />
													</InputAdornment>
												),
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											fullWidth
											label='URL manzili'
											name='url'
											placeholder='https://libraryNetBuilder.uz'
											value={data.url}
											onChange={handleChange}
											required
											InputProps={{
												startAdornment: (
													<InputAdornment position='start'>
														<Language />
													</InputAdornment>
												),
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											fullWidth
											id='outlined-number'
											type='number'
											label='Telefon raqami'
											name='phone_num'
											placeholder='+998 99-999-99-99'
											value={data.phone_num}
											onChange={handleChange}
											required
											InputProps={{
												startAdornment: (
													<InputAdornment position='start'>
														<LocalPhone />
													</InputAdornment>
												),
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											fullWidth
											label='Raxbar'
											name='leader'
											placeholder='Ilhom Jabborov'
											value={data.leader}
											onChange={handleChange}
											required
											InputProps={{
												startAdornment: (
													<InputAdornment position='start'>
														<AccountCircle />
													</InputAdornment>
												),
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											fullWidth
											label='Kutubxona manzili'
											name='location'
											placeholder='Sirdaryo viloyati'
											value={data.location}
											onChange={handleChange}
											required
											InputProps={{
												startAdornment: (
													<InputAdornment position='start'>
														<LocationOn />
													</InputAdornment>
												),
											}}
										/>
									</Grid>
									<Grid item xs={12} justifyContent={'center'}>
										<Button type='submit' variant='contained' color='primary'>
											Jo'natish
										</Button>
									</Grid>
								</Grid>
							</form>
						</Grid>
					</Grid>
				</Typography>
			</Box>
		</>
	);
};

export default Create;
