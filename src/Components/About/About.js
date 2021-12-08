import React from 'react';
import {
	Button,
	Pagination,
	Container,
	Typography,
	TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ForumIcon from '@mui/icons-material/Forum';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import icon1 from '../images/icon/icon1.png';
import icon2 from '../images/icon/icon2.png';
import icon3 from '../images/icon/icon3.png';
import icon4 from '../images/icon/icon4.png';
import '../SCSS/About.scss';
import img1 from '../images/profile/pic1.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import Nav_white from '../Navbar/Navbar_white';
import Top_white from '../Navbar/top_bar_white';
import Footer from '../Footer/LastPage';
import RightIcon from '@mui/icons-material/ChevronRight';
import Carousel from '../Home/Section4_carousel';
// import ReactPlayer from 'react-player/youtube';
import ReactPlayer from 'react-player';
import Video from './Video.mp4';
import Poster from '../images/about/pic1.jpg';

export default function About() {
	return (
		<div>
			<Top_white />
			<Nav_white />
			<div className="About">
				<div className="CoursesPage">
					<div className="backTypo">
						<Typography align="center" variant="h4" fontWeight="600">
							About Us
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
							Home <RightIcon sx={{ fontSize: '18px' }} /> About Us
						</Typography>
					</Container>
				</div>
				<Container>
					<Grid container columnSpacing={4} rowSpacing={3}>
						<Grid item xs={12} md={3}>
							<div className="AboutCard">
								<img src={icon1} />
								<Typography variant="h5" fontWeight="600">
									Our Philosophy
									<Typography>
										Lorem inspum dolor sit amet,consectetuer adipisicing
										elit,sed diam nonummy nibh euismud
									</Typography>
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} md={3}>
							<div className="AboutCard">
								<img src={icon2} />
								<Typography variant="h5" fontWeight="600">
									Our Philosophy
									<Typography>
										Lorem inspum dolor sit amet,consectetuer adipisicing
										elit,sed diam nonummy nibh euismud
									</Typography>
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} md={3}>
							<div className="AboutCard">
								<img src={icon3} />
								<Typography variant="h5" fontWeight="600">
									Our Philosophy
									<Typography>
										Lorem inspum dolor sit amet,consectetuer adipisicing
										elit,sed diam nonummy nibh euismud
									</Typography>
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} md={3}>
							<div className="AboutCard">
								<img src={icon4} />
								<Typography variant="h5" fontWeight="600">
									Our Philosophy
									<Typography>
										Lorem inspum dolor sit amet,consectetuer adipisicing
										elit,sed diam nonummy nibh euismud
									</Typography>
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} md={5}>
							<br />
							<br />
							<div className="story">
								<Typography variant="h4" fontWeight="600">
									Our Story
									<Typography className="space" variant="body1" align="left">
										<br />
										Lorem ipsum dolor sit amet.
										<br /> <br /> Consectetur adipiscing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim
										ad minim veniam, quis nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat. Duis aute irure
										dolor in reprehenderit in voluptate velit esse cillum dolore
										eu fugiat nulla pariatur.
									</Typography>
									<br />
									<Button type="submit" variant="contained">
										Read More
									</Button>
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} md={7}>
							<br />
							<br />
							<br />
							<div className="player-wrapper">
								<ReactPlayer
									className="react-player"
									url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
									width="100%"
									height="100%"
									controls={true}
									light={Poster}
								/>
							</div>
							{/* <VideoPlayer
								className="Video"
								src={Video}
								poster={Poster}
								width="300%"
								height="100%"
							/> */}
							<br />
							<br />
						</Grid>{' '}
						<Grid item xs={12} md={3}>
							<Typography
								style={{
									padding: '10px',
									margin: '20px',
									color: 'rgb(120, 0, 181)',
								}}
								variant="h2"
								fontWeight="800"
								align="center"
							>
								3000+
								<br />
								<Typography
									style={{ color: '#545454' }}
									variant="body1"
									fontWeight="500"
								>
									Completed Projects
								</Typography>
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography
								style={{ padding: '10px', margin: '20px' }}
								variant="h2"
								fontWeight="800"
								align="center"
							>
								2500+
								<br />
								<Typography
									style={{ color: '#545454' }}
									variant="body1"
									fontWeight="500"
								>
									Happy Clients
								</Typography>
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography
								style={{
									padding: '10px',
									margin: '20px',
									color: 'rgb(120, 0, 181)',
								}}
								variant="h2"
								fontWeight="800"
								align="center"
							>
								1500+
								<br />
								<Typography
									style={{ color: '#545454' }}
									variant="body1"
									fontWeight="500"
								>
									Questions Answered
								</Typography>
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography
								style={{ padding: '10px', margin: '20px' }}
								variant="h2"
								fontWeight="800"
								align="center"
							>
								1000+
								<br />
								<Typography
									style={{ color: '#545454' }}
									variant="body1"
									fontWeight="500"
								>
									Ordered coffee's
								</Typography>
							</Typography>
						</Grid>
					</Grid>
				</Container>
				<br />
				<br />
				<div className="fixedBack">
					<div className="backTypoFixed">
						<Container>
							<Grid container>
								<Grid item xs={12} md={12}>
									<Typography variant="h5" fontWeight="600" align="center">
										Leran a new skill online on your time
									</Typography>
									<Typography varaint="h6" fontWeight="600" align="center">
										57,000 onine Courses
									</Typography>
									<Typography variant="body5" align="center">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Vestibulum sed commodo felis. Curabitur rhoncus ipsum urna,
										ac semper metus sollicitudin at. In nisi turpis, congue quis
										viverra sed, luctus eleifend tellus. Maecenas ornare
										tincidunt velit, et vestibulum mauris iaculis a. Orci varius
										natoque penatibus et magnis dis parturient montes, nascetur
										ridiculus mus. Nunc at diam id magna finibus placerat et sit
										amet diam. Nunc non tempor ex, at tempus sem. Nunc at
										venenatis magna, et tempus lacus. Donec interdum est eget
										tempor feugiat.
									</Typography>{' '}
									<br />
									<br />
									<Button sx={{ p: '15px 30px' }} variant="contained">
										Join Now{' '}
									</Button>
								</Grid>
							</Grid>
						</Container>
					</div>
				</div>
				<br />
				<Container>
					<div className="carouselCards">
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
								<strong>WHAT PEOPLE </strong>
								SAY
							</Typography>
							<br />
							<Typography sx={{}}>
								It is a long established fact that a reader will be distracted
								by the readable content of a page{' '}
							</Typography>
							<Carousel />
							<br />
							<br />
							<br />
						</Container>
					</div>
					<br />
					<Grid container columnSpacing={4} rowSpacing={4}>
						<Grid item xs={12} md={5}>
							<div className="contactCard">
								<Container>
									<Typography
										className="colorWhite"
										variant="h4"
										fontWeight="600"
									>
										Contact{' '}
										<span style={{ fontWeight: '300' }}>Information</span>
									</Typography>
									<br />
									<Typography
										className="colorWhite"
										varaint="body1"
										fontWeight="400"
									>
										Lorem ipsum is simply dummy text of the printing and
										typesetting industry.
									</Typography>
									<br />
									<hr style={{ opacity: '0.3' }} />
									<br />
									<div style={{ display: 'flex' }}>
										<LocationOnIcon
											style={{
												color: 'red',
												marginRight: '10px',
											}}
										/>

										<Typography
											className="colorWhite"
											variant="body1"
											fontWeight="300"
										>
											Chortoq shahar
										</Typography>
									</div>
									<Typography
										sx={{ pl: '35px' }}
										className="colorWhite"
										variant="body1"
										fontWeight="300"
									>
										"Istiqlol xiyoboni" ko'chasi 12-uy <br />
										Mo'njal:"Afsona" bolalar bog'i yonida.
									</Typography>
									&nbsp;
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<PhoneIcon
											style={{
												color: 'green',
												marginRight: '10px',
											}}
										/>
										<Typography className="colorWhite" varaint="body1">
											+998 99 322 01 13
										</Typography>
									</div>
									<br />
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<MailIcon
											style={{
												color: 'gray',
												marginRight: '10px',
											}}
										/>
										<Typography className="colorWhite" varaint="body1">
											info@example.com
										</Typography>
									</div>
									<br />
									<hr style={{ opacity: '0.3' }} />
									&nbsp;
									<Typography
										className="colorWhite"
										variant="h6"
										fontWeight="600"
									>
										Follow Us
									</Typography>
									<br />
									<InstagramIcon
										className="ContactIcon"
										style={{
											padding: '10px',
											borderRadius: '50%',
											border: '1px solid white',
											fontSize: '40px',
											cursor: 'pointer',
											color: 'white',
										}}
									/>
									&nbsp;
									<TelegramIcon
										className="ContactIcon"
										style={{
											padding: '10px',
											borderRadius: '50%',
											border: '1px solid white',
											fontSize: '40px',
											cursor: 'pointer',
											color: 'white',
										}}
									/>
									&nbsp;
									<FacebookIcon
										className="ContactIcon"
										style={{
											padding: '10px',
											borderRadius: '50%',
											border: '1px solid white',
											fontSize: '40px',
											cursor: 'pointer',
											color: 'white',
										}}
									/>
								</Container>
							</div>
						</Grid>
						<Grid item xs={12} md={6.5}>
							<iframe
								style={{ border: 'none' }}
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.3586927348742!2d71.67288005651785!3d40.99552167390775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c1b2e60eea5%3A0x36ef7252c4c12106!2z0J3QsNC80LDQvdCz0LDQvSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1638863595687!5m2!1sru!2s"
								width="100%"
								height="100%"

								// style="border:0;"
								// allowfullscreen=""
								// loading="lazy"
							></iframe>
						</Grid>
					</Grid>
				</Container>
				<br />
			</div>
			<br />
			<br />
			<Footer />
		</div>
	);
}
