import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import './LastPage.scss';
import Logo from '../images/logo-2.png';
import Gallery from './Gallery';

export default function LastPage() {
	return (
		<div className="LastPage">
			<Container>
				<Grid container rowSpacing={3} columnSpacing={4}>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						// sx={{ display: 'flex', justifyContent: 'center' }}
					>
						<div className="innerLastPAge">
							<img src={Logo} />
							<br />
							<br />
							<Typography>
								Chortoq shahar <br />
								"Istiqlol xiyoboni" ko'chasi 12-uy
								<br />
								Mo'ljal:"Afsona" bolalar bog'i yonida.
							</Typography>
						</div>
					</Grid>
					<Grid
						item
						xs={6}
						sm={3}
						md={2}
						// sx={{ display: 'flex', justifyContent: 'center' }}
					>
						<table>
							<thead>
								<tr>
									<Typography sx={{ color: '#fff' }}> School</Typography>
									<hr style={{ opacity: '.2' }} />
								</tr>
							</thead>
							<br />
							<tbody>
								<tr>
									<a href="#">
										<Typography variant="subtitle2" className="Service">
											{' '}
											Home
										</Typography>
									</a>
								</tr>
								<tr>
									<a href="#">
										<Typography variant="subtitle2" className="Service">
											{' '}
											About
										</Typography>
									</a>
								</tr>
								<tr>
									<a href="#">
										<Typography variant="subtitle2" className="Service">
											{' '}
											Gallery
										</Typography>
									</a>
								</tr>
							</tbody>
						</table>
					</Grid>
					<Grid
						item
						xs={6}
						sm={3}
						md={2}
						// sx={{ display: 'flex', justifyContent: 'center' }}
					>
						<table>
							<thead>
								<tr>
									<Typography sx={{ color: '#fff' }}> Service</Typography>
									<hr style={{ opacity: '.2' }} />
								</tr>
							</thead>
							<br />
							<tbody>
								<tr>
									<a href="#">
										<Typography variant="subtitle2" className="Service">
											Courses
										</Typography>
									</a>
								</tr>
								<tr>
									<a href="#">
										<Typography variant="subtitle2" className="Service">
											{' '}
											News
										</Typography>
									</a>
								</tr>
								<tr>
									<a href="#">
										<Typography variant="subtitle2" className="Service">
											{' '}
											Events
										</Typography>
									</a>
								</tr>
							</tbody>
						</table>
					</Grid>
					<Grid item xs={12} md={4}>
						<thead>
							<tr>
								<Typography sx={{ color: '#fff' }}>
									{' '}
									Our Gallery
									<hr style={{ opacity: '.2' }} />
								</Typography>
							</tr>
						</thead>
						<br />
						<Gallery />
					</Grid>
				</Grid>
			</Container>
			<br />
			{/* <br /> */}
			<hr style={{ opacity: '.2' }} />
			<Typography style={{ paddingTop: '20px' }} align="center">
				Developed by <strong>INLAB</strong>
			</Typography>
		</div>
	);
}
