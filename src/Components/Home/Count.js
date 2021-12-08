import React from 'react';
import '../SCSS/Count.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
function Upcoming_ivents() {
	return (
		<div
			// className="CountBackground"
			style={{
				width: '100%',
				padding: '50px 20px',
				display: 'flex',
				alignItems: 'center',
				backgroundImage: 'linear-gradient(to right, #8700FF, #5900FF)',
				opacity: '.6',
			}}
		>
			<Container
				align="center"
				maxWidth="md"
				sx={{
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					// backgroundColor: 'red',
				}}
			>
				<Grid container columnSpacing={2} rowSpacing={1}>
					<Grid item xs={12} sm={6} md={4}>
						<Typography variant="h3" className="Count_area">
							<div>
								<PersonIcon className="CountIcons" />
								5000+
							</div>
							<Typography align="center">5 ming o'quvchilar</Typography>
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography variant="h3" className="Count_area">
							<div>
								<BookIcon className="CountIcons" /> 20+
							</div>
							<Typography align="center">Courses</Typography>
						</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Typography variant="h3" className="Count_area">
							<div>
								<SchoolIcon className="CountIcons" />
								&nbsp;50+
							</div>
							<Typography align="center">Malakali o'qituvchilar</Typography>
						</Typography>
					</Grid>{' '}
				</Grid>
			</Container>
		</div>
	);
}

export default Upcoming_ivents;
