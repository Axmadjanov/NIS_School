import React from 'react';
import '../SCSS/Section4.scss';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Carousel from './Section4_carousel';
import Box from '@mui/material/Box';

function Upcoming_ivents() {
	return (
		<div>
			<div
				className="Section4"
				style={{
					marginTop: '200px',
					width: '100%',
					height: '600px',
					backgroundImage: 'linear-gradient(to right, #380C6A, #380C6A',
					opacity: '.8',
				}}
			>
				<Container
					sx={{
						pt: '70px',
					}}
				>
					<Typography
						variant="h4"
						sx={{
							pl: 1,
							color: 'white',
							borderLeft: '5px solid #FFA200',
						}}
					>
						<strong>WHAT PEOPLE </strong>
						SAY
					</Typography>
					<br />
					<Typography sx={{ color: 'white' }}>
						It is a long established fact that a reader will be distracted by
						the readable content of a page{' '}
					</Typography>
					<Carousel />
				</Container>
			</div>
		</div>
	);
}

export default Upcoming_ivents;
