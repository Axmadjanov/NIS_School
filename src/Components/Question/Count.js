import React from 'react';
import { Typography } from '@mui/material';

export default function Count(props) {
	return (
		<div>
			<Typography
				style={{
					padding: '10px',
					margin: '20px',
					color: 'rgb(120, 0, 181)',
				}}
				variant="h2"
				fontWeight="600"
				align="center"
			>
				{props.count}
				<br />
				<Typography
					style={{ color: '#545454' }}
					variant="body1"
					fontWeight="500"
				>
					{props.pvalue}
				</Typography>
			</Typography>
		</div>
	);
}
