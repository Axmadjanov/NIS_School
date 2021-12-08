import React from 'react';
import '../SCSS/About.scss';
import img1 from '../images/profile/pic1.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';

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

export default function Contact() {
	return (
		<div className="contactCard">
			<br />
			<Container>
				<Typography className="colorWhite" variant="h4" fontWeight="600">
					Contact <span style={{ fontWeight: '300' }}>Information</span>
				</Typography>
				<br />
				<Typography className="colorWhite" varaint="body1" fontWeight="400">
					Lorem ipsum is simply dummy text of the printing and typesetting
					industry.
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

					<Typography className="colorWhite" variant="body1" fontWeight="300">
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
				<Typography className="colorWhite" variant="h6" fontWeight="600">
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
	);
}
