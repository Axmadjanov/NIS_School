import {
	Container,
	Typography,
	TextField,
	Button,
	FormControlLabel,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import '../SCSS/Section2_cards.scss';

export default function AreaCard(props) {
	return (
		<Container maxWidth="lg">
			<div className="CardArea ">
				<img src={props.Rasm} />
				<Container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						mt: '-45px',
					}}
				>
					<div
						style={{
							width: '70px',
							height: '70px',
							backgroundColor: 'white',
							boxShadow: '0 0 20px rgba(17, 17, 17, 0.153)',
							borderRadius: '50%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{props.icon}
					</div>
				</Container>

				<Typography
					fontWeight={700}
					align="center"
					sx={{ padding: '10% 0', fontSize: '23px' }}
				>
					{props.Letter}
				</Typography>
			</div>
		</Container>
	);
}
