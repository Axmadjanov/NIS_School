import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import './Gallery.scss';
import { SRLWrapper } from 'simple-react-lightbox';
import '../SCSS/Gallery.scss';
import image1 from '../images/gallery/pic1.jpg';
import image2 from '../images/gallery/pic2.jpg';
import image3 from '../images/gallery/pic3.jpg';
import image4 from '../images/gallery/pic4.jpg';
import image5 from '../images/gallery/pic5.jpg';
import image6 from '../images/gallery/pic6.jpg';
import image7 from '../images/gallery/pic7.jpg';
import image8 from '../images/gallery/pic8.jpg';
import Footer from '../Footer/LastPage';
import Top_bar from '../Navbar/top_bar_white';
import Navbar from '../Navbar/Navbar_white';
import RightIcon from '@mui/icons-material/ChevronRight';
import Grid from '@mui/material/Grid';

export default function Galary() {
	return (
		<div>
			<Top_bar />
			<Navbar />
			<div className="CoursesPage">
				<div className="backTypo">
					<Typography align="center" variant="h4" fontWeight="600">
						Portfolio
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
					<Typography sx={{ display: 'flex', alignItems: 'center' }}>
						Home <RightIcon sx={{ fontSize: '18px' }} /> Portfolio
					</Typography>
				</Container>
			</div>
			<Container>
				<br />
				<SRLWrapper>
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexWrap: 'wrap',
						}}
						className="photoGalary2"
					>
						<Grid container columnSpacing={2} rowSpacing={2}>
							<Grid item xs={12} sm={6} md={3}>
								<div
									style={{
										backgroundColor: 'black',
										height: '100%',
									}}
								>
									<img
										className="galary_img"
										src={require('../images/gallery/pic1.jpg').default}
									/>
								</div>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<div
									style={{
										backgroundColor: 'black',
										height: '100%',
									}}
								>
									<img
										className="galary_img"
										src={require('../images/gallery/pic2.jpg').default}
									/>
								</div>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<div
									style={{
										backgroundColor: 'black',
										height: '100%',
									}}
								>
									<img
										className="galary_img"
										src={require('../images/gallery/pic3.jpg').default}
									/>
								</div>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<div
									style={{
										backgroundColor: 'black',
										height: '100%',
									}}
								>
									<img
										className="galary_img"
										src={require('../images/gallery/pic4.jpg').default}
									/>
								</div>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<div
									style={{
										backgroundColor: 'black',
										height: '100%',
									}}
								>
									<img
										className="galary_img"
										src={require('../images/gallery/pic5.jpg').default}
									/>
								</div>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<div
									style={{
										backgroundColor: 'black',
										height: '100%',
									}}
								>
									<img
										className="galary_img"
										src={require('../images/gallery/pic6.jpg').default}
									/>
								</div>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<div
									style={{
										backgroundColor: 'black',
										height: '100%',
									}}
								>
									<img
										className="galary_img"
										src={require('../images/gallery/pic7.jpg').default}
									/>
								</div>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<div
									style={{
										backgroundColor: 'black',
										height: '100%',
									}}
								>
									<img
										className="galary_img"
										src={require('../images/gallery/pic8.jpg').default}
									/>
								</div>
							</Grid>
						</Grid>
					</div>
					<br />
					<br />
					<br />
					<br />
				</SRLWrapper>
			</Container>
			<Footer />
		</div>
	);
}
