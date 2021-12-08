import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import PhoneIcon from '@mui/icons-material/Phone';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function SimpleContainer() {
	const [age, setAge] = React.useState('');

	const handleChange = event => {
		setAge(event.target.value);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			{/* <Container maxWidth="lg"> */}
			{/* <Box> */}
			<Grid
				container
				columnSpacing={26}
				rowSpacing={0}
				sx={{
					display: 'flex',
					p: '5px 0px 0',
				}}
			>
				<Grid
					item
					xs={12}
					// sm={12}
					md={6}
					sx={{
						// backgroundColor: 'red',
						display: 'flex',
						// width: '100%',
						justifyContent: 'center',
						// alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							// backgroundColor: 'blue',
						}}
					>
						<Typography
							variant="subtitle2"
							style={{
								padding: '0 10px',
								marginRight: '10px',
								borderRight: '1px solid rgba(88, 88, 88, 0.481)',
								cursor: 'pointer',
							}}
						>
							<Link
								style={{ color: 'white', textDecoration: 'none' }}
								to="/questions"
							>
								<HelpIcon
									sx={{
										position: 'relative',
										top: '1px',
										height: '15px',
										width: '15px',
										color: 'white',
										backgroundColor: 'black',
										borderRadius: '50%',
									}}
									className="icon"
								/>{' '}
								Ask a Question
							</Link>
						</Typography>
						<Typography
							variant="subtitle2"
							sx={{ color: 'white', cursor: 'pointer' }}
						>
							<PhoneIcon
								sx={{
									position: 'relative',
									top: '1px',
									height: '15px',
									width: '15px',
									color: 'white',
									borderRadius: '50%',
								}}
							/>{' '}
							+998 99 322 01 13
						</Typography>
					</div>
				</Grid>

				{/* <Grid item xs={12} md={4}></Grid> */}

				<Grid item xs={12} md={6}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<FormControl>
							<Select
								sx={{
									textDecoration: 'none',
									height: '20px',
									pt: '5px',
									marginRight: '10px',
									borderRight: '1px solid rgba(88, 88, 88, 0.481)',
									color: 'white',
								}}
								variant="standard"
								value={age}
								onChange={handleChange}
								displayEmpty
								inputProps={{ 'aria-label': 'Without label' }}
							>
								<MenuItem value="">
									<Typography variant="subtitle2">English</Typography>
								</MenuItem>
								<MenuItem value={20}>
									<Typography variant="subtitle2">Uzbek</Typography>
								</MenuItem>
							</Select>
						</FormControl>
						<Typography
							variant="subtitle2"
							sx={{
								color: 'white',
								paddingRight: '10px',
								marginRight: '10px',
								borderRight: '1px solid rgba(88, 88, 88, 0.481)',
								cursor: 'pointer',
							}}
						>
							<Link
								to="/login"
								style={{ textDecoration: 'none', color: '#fff' }}
							>
								Login
							</Link>
						</Typography>
						<Typography
							variant="subtitle2"
							sx={{ cursor: 'pointer', color: 'white' }}
						>
							<Link
								to="/signup"
								style={{ textDecoration: 'none', color: '#fff' }}
							>
								Register
							</Link>
						</Typography>
					</div>
				</Grid>
			</Grid>
			{/* </Box> */}
			{/* </Container> */}
		</React.Fragment>
	);
}
