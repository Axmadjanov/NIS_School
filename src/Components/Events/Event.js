import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Footer from '../Footer/LastPage';
import Event from './EventCard';
import '../SCSS/About.scss';
import Navbar from '../Navbar/Navbar_white';
import Top_bar from '../Navbar/top_bar_white';
import RightIcon from '@mui/icons-material/ChevronRight';
export default function MainEvent() {
	return (
		<div>
			<Top_bar />
			<Navbar />
			<div className="CoursesPage">
				<div className="backTypo">
					<Typography align="center" variant="h4" fontWeight="600">
						Event
					</Typography>
				</div>
			</div>
			<div
				style={{
					borderBottom: '1px solid rgba(109, 108, 134, 0.168)',
					marginBottom: '50px',
				}}
			>
				<Container sx={{ p: '15px ' }}>
					<Typography
						// variant="body2"
						sx={{ display: 'flex', alignItems: 'center' }}
					>
						Home <RightIcon sx={{ fontSize: '18px' }} /> Event and News
					</Typography>
				</Container>
			</div>
			<Event />
			<Footer />
		</div>
	);
}
