import React from 'react';
import {
	Button,
	Pagination,
	Container,
	Typography,
	TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import '../SCSS/Courses.scss';
import pic1 from '../images/blog/default/thum1.jpg';
import pic2 from '../images/blog/default/thum2.jpg';
import pic3 from '../images/blog/default/thum3.jpg';
import pic4 from '../images/blog/default/thum4.jpg';
import pic5 from '../images/event/pic1.jpg';
import pic6 from '../images/event/pic2.jpg';
import pic7 from '../images/event/pic3.jpg';
import pic8 from '../images/event/pic4.jpg';
import Top_bar from '../Navbar/top_bar_white';
import Navbar from '../Navbar/Navbar_white';
import Footer from '../Footer/LastPage';
import RightIcon from '@mui/icons-material/ChevronRight';

export default function Courses() {
	return (
		<div className="Courses">
			<Top_bar />
			<Navbar />
			<div className="CoursesPage">
				<div className="backTypo">
					<Typography align="center" variant="h4" fontWeight="600">
						Our Courses
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
						Home <RightIcon sx={{ fontSize: '18px' }} /> Our Courses
					</Typography>
				</Container>
			</div>
			<Container sx={{ mb: 10 }}>
				<Grid container columnSpacing={3} rowSpacing={4}>
					<Grid item xs={12} md={3}>
						<TextField
							variant="standard"
							label="Search for Courses"
							fullWidth
						/>
						<Typography align="center" variant="h6" fontWeight="600">
							All Courses
						</Typography>
						<a href="#">
							<li>General</li>
						</a>
						<a href="#">
							<li>It & Software</li>
						</a>
						<a href="#">
							<li>Photography</li>
						</a>
						<a href="#">
							<li>Programming Language</li>
						</a>
						<a href="#">
							<li>Technology</li>
						</a>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="CourseCard">
							<img src={pic1} />
							<Typography
								style={{ padding: '10px' }}
								variant="h6"
								align="center"
								fontWeight="500"
							>
								Introduction EduChamp-LMS plugin
								<Typography variant="body2">Programming</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="CourseCard">
							<img src={pic2} />
							<Typography
								style={{ padding: '10px' }}
								variant="h6"
								align="center"
								fontWeight="500"
							>
								Introduction EduChamp-LMS plugin
								<Typography variant="body2">Programming</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="CourseCard">
							<img src={pic3} />
							<Typography
								style={{ padding: '10px' }}
								variant="h6"
								align="center"
								fontWeight="500"
							>
								Introduction EduChamp-LMS plugin
								<Typography variant="body2">Programming</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="backTypo1">
							<div className="backTypo2">
								<Typography align="center" variant="h5" fontWeight="600">
									Free Online <br /> Courses <br />
									<Button variant="outlined" color="secondary">
										Join Now
									</Button>
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="CourseCard">
							<img src={pic4} />
							<Typography
								style={{ padding: '10px' }}
								variant="h6"
								align="center"
								fontWeight="500"
							>
								Introduction EduChamp-LMS plugin
								<Typography variant="body2">Programming</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="CourseCard">
							<img src={pic5} />
							<Typography
								style={{ padding: '10px' }}
								variant="h6"
								align="center"
								fontWeight="500"
							>
								Introduction EduChamp-LMS plugin
								<Typography variant="body2">Programming</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="CourseCard">
							<img src={pic6} />
							<Typography
								style={{ padding: '10px' }}
								variant="h6"
								align="center"
								fontWeight="500"
							>
								Introduction EduChamp-LMS plugin
								<Typography variant="body2">Programming</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={3}></Grid>
					<Grid item xs={12} md={3}>
						<div className="CourseCard">
							<img src={pic7} />
							<Typography
								style={{ padding: '10px' }}
								variant="h6"
								align="center"
								fontWeight="500"
							>
								Introduction EduChamp-LMS plugin
								<Typography variant="body2">Programming</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="CourseCard">
							<img src={pic8} />
							<Typography
								style={{ padding: '10px' }}
								variant="h6"
								align="center"
								fontWeight="500"
							>
								Introduction EduChamp-LMS plugin
								<Typography variant="body2">Programming</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="CourseCard">
							<img src={pic1} />
							<Typography
								style={{ padding: '10px' }}
								variant="h6"
								align="center"
								fontWeight="500"
							>
								Introduction EduChamp-LMS plugin
								<Typography variant="body2">Programming</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={0} md={3}></Grid>
					<Grid item xs={12} md={3}>
						<Pagination
							className="pagination"
							count={3}
							variant="outlined"
							// color="secondary"
							shape="rounded"
						/>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}
