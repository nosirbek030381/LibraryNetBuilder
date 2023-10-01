import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { About, Contact, Create, Main, Navbar, SiteDetail } from '../';

const App = () => {
	return (
		<Box>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				{/* <Route path="/team" element={<Team />} />  */}
				<Route path='/sitedetail' element={<SiteDetail />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/create' element={<Create />} />
			</Routes>
		</Box>
	);
};

export default App;
