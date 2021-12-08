import React from 'react';
import { Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Section4_carousel_card(props) {
	return (
		<div
			style={{
				display: 'flex',
				backgroundColor: 'white ',
				width: '96%',
				borderRadius: '8px',
				padding: '0px 15px 20px 0px',
				border: '1px solid rgba(182, 182, 182, 0.429)',
			}}
		>
			<div
				style={{
					padding: '20px 30px  ',
					display: 'flex',
				}}
			>
				<img
					style={{
						width: '80px',
						height: '80px',
						borderRadius: '50%',
						border: '2px solid white',
						boxShadow: '0 0 10px black',
					}}
					src={props.Img}
				/>
			</div>
			<div>
				<Typography variant="h6" sx={{ pt: 4 }}>
					Peter Packer
				</Typography>
				<Typography variant="body1">-Art Director</Typography>
				<br />
				<Typography variant="body1">
					Lorem Ipsum is simply dummy text of the prenting and typesetting
					industry. Lorem ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</Typography>
			</div>
		</div>
	);
}

export default Section4_carousel_card;
