import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { About } from '../../constant';

const AboutSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box container='true' p={5} py={4} bgcolor='#f8f8f8' mt={isMobile ? 2 : 10}>
			<Grid container spacing={3} alignItems='center' justifyContent='center' display='flex'>
				<Grid item xs={12} sm={6}>
					<img
						src={About}
						alt='About'
						style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant='h4' component='h2' mb={2}>
						LibraryNetBuilder
					</Typography>
					<Typography variant='body1' mb={3}>
						LibraryNetBuilder bir kutubxona veb-sayti yaratish platformasidir. Ushbu platforma
						orqali siz kutubxonangiz uchun qulay, funksional va odobli veb-saytlarni tez va osonlik
						bilan yarata olasiz. LibraryNetBuilder sizga kutubxona sayti yaratish uchun bir nechta
						tayyor dizaynlarni va komponentlarni taklif qiladi. Siz bu dizayn va komponentlardan
						tanlash va o'zgartirishlar kiritish orqali eng muhim xususiyatlarga ega bo'lgan veb-sayt
						yarata olasiz.
					</Typography>
					<Typography variant='body1' mb={3}>
						Platforma o'z ichiga tashkil etgan tayyor komponentlar, navigatsiya paneli, matnli
						bloklar, rasmlar, formalar va ko'p boshqa elementlarni o'z ichiga oladi. Buning yanada
						o'zgartirish va moslashtirish uchun sizga HTML, CSS va JavaScript bilan mashg'ul bo'lish
						zarur bo'lmaydi. LibraryNetBuilder bilan siz o'zingizga moslashtirilgan veb-saytni
						yarata olasiz va uni kutubxonangizga moslashtirish imkoniyatiga ega bo'lasiz. Bu
						platforma sizga veb-sayt yaratish jarayonini soddalashtiradi va natijada yuqori sifatli
						veb-saytlar hosil qilishingizga yordam beradi.
					</Typography>
					<Typography variant='body1' mb={3}>
						LibraryNetBuilder sizga saytning tuzilishi, dizayni va foydalanuvchilar bilan interaktiv
						aloqalarini tuzishda katta imkoniyatlar beradi. Sizning kutubxona saytingiz yaratish
						jarayonini soddalashtirish va samarali qilish uchun LibraryNetBuilder platformasidan
						foydalanishingiz mumkin.
					</Typography>
				</Grid>
			</Grid>
			{/* <CountUp /> */}
		</Box>
	);
};

export default AboutSection;
