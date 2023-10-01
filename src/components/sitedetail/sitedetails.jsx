import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SiteDetail = () => {
	return (
		<>
			<Box sx={{ marginTop: 9 }} boxShadow={10}>
				<Typography
					variant='h4'
					gutterBottom
					textAlign={'center'}
					mt={1}
					fontFamily={('monospace', 'sans-serif')}
				>
					Saytimiz yo'riqnomasi bilan tanishing
				</Typography>
				<Typography variant='h5' textAlign={'center'}>
					Saytni qoʻshish uchun talablar:
				</Typography>
				<Box sx={{ margin: 2, padding: 2, width: '100%', m: 'auto', mt: 1 }}>
					<Typography variant='h5' textAlign={'center'} gutterBottom>
						Backend uchun kerakli
					</Typography>
					<Typography variant='h6' sx={{ mb: 2 }}>
						1. Sayt API protokoli oraqli ishlashi kerak
					</Typography>
					<Typography variant='h6' gutterBottom>
						2. Saytda <Link>https://example.uz/books/</Link> - urlida kitoblar roʻyxati, <br />
						<Link>https://example.uz/book/1 </Link> - urlida bitta kitob manzili(bookDetail page),{' '}
						<br />
						<Link>https://example.uz/?name=kitobnomi - </Link> urlida kutubxonani oʻzidan qidiradi.{' '}
						<br />
						<Link>https://example.uz/search?name=kitobnomi - </Link> Urlida butun kutubxonalar
						tizimidan qidiradi
					</Typography>
					<Typography variant='h6' gutterBottom>
						3. Kutubxona saytida kamida 3 ta Avtor Kategoriya Kitob jadvali boʻlishi Avtor va
						Kategoriya Kitob jadvaliga Foreignkey bogʻlanishi kerak.
					</Typography>
					<Typography variant='h6' gutterBottom>
						4. Saytni frontendi va backend domeni bir xil boʻlishi backend domeni esa api subdomeni
						bilan boshlanishi kerak. <br /> Frontend - <Link>https://example.uz/</Link> <br />{' '}
						Backend - <Link>https://api.example.uz/</Link>
					</Typography>
				</Box>
				<Typography
					variant='h5'
					mt={10}
					textAlign={'center'}
					gutterBottom
					sx={{ background: 'red', color: '#fff' }}
				>
					Sizdan qilinadigan talablarimiz shulardan iborat. Hurmat bilan LibraryNetBuilder jamoasi.
				</Typography>
			</Box>
		</>
	);
};

export default SiteDetail;
