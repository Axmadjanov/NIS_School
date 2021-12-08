import React from 'react';
import Container from '@mui/material/Container';

import Pic1 from '../images/about/pic1.jpg';
import Grid from '@mui/material/Grid';
import Card from './Section2_cards';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ContactsIcon from '@mui/icons-material/ImportContacts';
import DescriptionIcon from '@mui/icons-material/Description';
import { Typography } from '@mui/material';
import Carousel from './Section2_carousel';

function Popular() {
	const kuchli = 'Kuchli uqituvchilar';
	const resurs = 'Yetarli resurslar';
	const sertifkat = 'Sertifikat';
	return (
		<div style={{ backgroundColor: 'transparent' }}>
			<Container sx={{}}>
				<Grid container columnSpacing={0} rowSpacing={28} sx={{}}>
					<Grid item xs={12} sm={6} md={4}>
						<Card
							Rasm={Pic1}
							Letter={kuchli}
							icon={
								<AccountBalanceIcon
									sx={{ fontSize: '2.5rem', color: 'rgba(123, 0, 172, 0.726)' }}
								/>
							}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card
							Rasm={Pic1}
							Letter={resurs}
							icon={
								<ContactsIcon
									sx={{ fontSize: '2.5rem', color: 'rgba(123, 0, 172, 0.726)' }}
								/>
							}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Card
							Rasm={Pic1}
							Letter={sertifkat}
							icon={
								<DescriptionIcon
									sx={{ fontSize: '2.5rem', color: 'rgba(123, 0, 172, 0.726)' }}
								/>
							}
						/>
					</Grid>
				</Grid>
				<div style={{ marginLeft: '10px' }}>
					<Typography
						variant="h4"
						sx={{
							mt: 10,
							pl: 1,
							borderLeft: '5px solid #FFA200',
						}}
					>
						<strong>Popular</strong> Courses
					</Typography>
					<br />
					<Typography variant="subtitle1" sx={{}}>
						it is a long established fact that a reader will be distracted by
						the <br />
						readable content of a page
					</Typography>
				</div>

				<Carousel />
				<br />
				<br />
				<br />
				<br />
			</Container>
		</div>
	);
}

export default Popular;
