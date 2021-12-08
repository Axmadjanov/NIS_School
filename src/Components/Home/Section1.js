import React from 'react';
import '../SCSS/Section1.scss';
import TopBar from '../Navbar/top-bar';
import Navbar from '../Navbar/Navbar';
import { Container, Typography } from '@mui/material';

function HomePage() {
	return (
		<div className="homepage">
			<div className="background">
				<TopBar />
				<Navbar />
				<Typography className="content_text_1" variant="h6">
					BETTER EDUCATION FOR A BETTER
				</Typography>
				<Typography className="content_text_2" variant="h3">
					<strong>WELLCOME TO UNIVERSITY</strong>
				</Typography>
				<Typography className="content_text_3">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has <br /> been the industry's standard dummy
					text ever since the 1500s,
				</Typography>
				<div
					style={{
						width: '100%',

						display: 'flex',
						justifyContent: 'center',
						marginTop: '25px',
					}}
				>
					<button className="content_btn1">CONTACT US</button>
					<button className="content_btn2">COURSES</button>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
