import React from 'react';
import { Container, Typography } from '@mui/material';
import Carousel from './Section5_carousel';
import Footer from '../Footer/LastPage';

function Section3() {
	return (
		<div style={{ height: '100vh', width: '100%', backgroundColor: 'white' }}>
			<Container
				sx={{
					pt: '70px',
				}}
			>
				<Typography
					variant="h4"
					sx={{
						pl: 1,

						borderLeft: '5px solid #FFA200',
					}}
				>
					<strong>Recent </strong>
					Events
				</Typography>
				<br />
				<Typography>
					It is a long established fact that a reader will be distracted by the
					<br />
					readable content of a page
				</Typography>
				<Carousel />
			</Container>
			<br />
			<br />
			<br />
			<Footer />
		</div>
	);
}

export default Section3;
