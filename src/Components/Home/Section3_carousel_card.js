import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Img1 from '../images/event/pic1.jpg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../SCSS/Section3_carousel_card.scss';

export default function ActionAreaCard() {
	return (
		<Card
			className="Section3_carousel_card"
			sx={{ m: 2, boxShadow: '0 0 20px rgba(17, 17, 17, 0.353)' }}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					image={Img1}
					alt="Photo"
					sx={{ height: '170px' }}
				/>
				<div
					style={{
						position: 'absolute',
						top: '85px',
						width: '75px',
						height: '85px',
						textAlign: 'center',
						backgroundColor: '#6D01AA',
						borderRadius: '5px',
					}}
				>
					<Typography
						variant="h4"
						sx={{ pt: 1, color: '#fff', fontWeight: '800' }}
					>
						29
						<Typography>october</Typography>
					</Typography>
				</div>

				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						Education Autumn Tour 2019
					</Typography>
					<Typography gutterBottom variant="body2" component="div">
						<span>
							<AccessTimeIcon sx={{ pt: 1.5 }} /> 7:00am 8:00am
						</span>
						<span>
							<LocationOnIcon sx={{ p: '10px 0 0 10px' }} /> Berlin, Germany
						</span>
					</Typography>
					<hr style={{ opacity: '0.2' }} />
					<Typography variant="body1" color="text.secondary">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
