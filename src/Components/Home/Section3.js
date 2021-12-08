import React from 'react';
import { Container, Typography } from '@mui/material';
import Carousel from './Section3_carousel';

function Section3() {
	return (
		<div style={{ height: '100vh', width: '100%', backgroundColor: 'white' }}>
			<Container
				sx={{
					pt: '70px',
				}}
			>
				<div style={{ marginLeft: '15px' }}>
					<Typography
						variant="h4"
						sx={{
							pl: 1,

							borderLeft: '5px solid #FFA200',
						}}
					>
						<strong>Upcoming </strong>
						Events
					</Typography>
					<br />
					<Typography>Upcoming Education Events To Feed Brain.</Typography>
				</div>

				<Carousel />
			</Container>
		</div>
	);
}

export default Section3;
