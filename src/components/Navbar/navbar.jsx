import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box,
	Button,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../constant';

const drawerWidth = 240;
const navItems = [
	{ text: 'Bosh sahifa', path: '/' },
	{ text: 'Biz haqimizda', path: '/about' },
	// { text: 'Jamoa', path: '/team' },
	{ text: "Bog'lanish", path: '/contact' },
	{ text: "Yo'riqnoma", path: '/sitedetail' },
	{ text: 'Sayt yaratish', path: '/create' },
];

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2, alignItems: 'center', display: 'flex' }}>
				<img src={Logo} alt='' height={30} style={{ borderRadius: '50%', marginRight: '10px' }} />
				LibraryNetBuilder
			</Typography>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.text} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }} component={Link} to={item.path}>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<CssBaseline />
			<AppBar component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{
							flexGrow: 1,
							display: { xs: '', sm: 'block' },
							alignItems: 'center',
						}}
					>
						<img
							src={Logo}
							alt=''
							height={30}
							style={{ borderRadius: '50%', marginRight: '10px' }}
						/>{' '}
						LibraryNetBuilder
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map(item => (
							<Button
								key={item.text}
								component={Link}
								to={item.path}
								sx={{ color: '#fff' }}
								id={item.text.replace(/ /g, '-').toLowerCase()}
							>
								{item.text}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			{/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
        </Typography>
      </Box> */}
		</Box>
	);
}

DrawerAppBar.propTypes = {
	window: PropTypes.func,
};

export default DrawerAppBar;
