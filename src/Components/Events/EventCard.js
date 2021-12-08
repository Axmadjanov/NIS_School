import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import './Event.scss';
import EventCard from '../Home/Section3_carousel_card';

// import image1 from './Images/image_1.jpg';
// import image2 from './Images/image_2.jpg';
// import image3 from './Images/image_3.jpg';
// import image4 from './Images/image_4.jpg';
// import image5 from './Images/image_5.jpg';
// import image6 from './Images/image_6.jpg';
// import image7 from './Images/image_7.jpg';
// import image8 from './Images/image_8.jpg';
// import image9 from './Images/image_9.jpg';

export default function Galary() {
	return (
		<div>
			<Container>
				<input type="radio" name="photo" id="check1" />
				<input type="radio" name="photo" id="check2" />
				<input type="radio" name="photo" id="check3" />
				<input type="radio" name="photo" id="check4" />
				<div className="containerImage">
					{/* <br /> */}
					<div className="topCenter">
						<Button variant="outlined">
							<label for="check1">All</label>
						</Button>
						<Button variant="outlined">
							<label for="check2">Happening</label>
						</Button>
						<Button variant="outlined">
							<label for="check3">Upcoming</label>
						</Button>
						<Button variant="outlined">
							<label for="check4">Expired</label>
						</Button>
					</div>
					<br />
					<div className="photoGalary">
						<div className="pic happen">
							<EventCard className="eventCard" />
						</div>
						<div className="pic upcome">
							<EventCard className="eventCard" />
						</div>
						<div className="pic happen">
							<EventCard className="eventCard" />
						</div>
						<div className="pic happen">
							<EventCard className="eventCard" />
						</div>
						<div className="pic upcome">
							<EventCard className="eventCard" />
						</div>

						<div className="pic expired">
							<EventCard className="eventCard" />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
