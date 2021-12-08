import Raect from 'react';

import '../SCSS/About.scss';
import { Typography, Container } from '@mui/material';

export default function QuestionCard(props) {
	return (
		<div>
			<div className="AboutCard">
				<img src={props.Icons} />
				<Typography variant="h6" fontWeight="600" sx={{ mb: '25px' }}>
					{props.Typo}
					<Typography>
						Lorem inspum dolor sit amet,consectetuer adipisicing elit,sed diam
						nonummy nibh euismud
					</Typography>
				</Typography>
			</div>
		</div>
	);
}
