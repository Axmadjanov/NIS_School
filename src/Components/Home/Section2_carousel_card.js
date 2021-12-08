import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Img1 from '../images/courses/pic1.jpg';

export default function ActionAreaCard() {
	return (
		<Card
			sx={{ m: '0 15px 20px', boxShadow: '0 0 20px rgba(17, 17, 17, 0.353)' }}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					// height="140"
					image={Img1}
					alt="Courses"
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h6"
						component="div"
						sx={{ textAlign: 'center' }}
					>
						Introduction EduChamp -LMS plugin
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ textAlign: 'center' }}
					>
						Programming
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
