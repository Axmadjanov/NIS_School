import React from 'react';
import './SignUp.scss';
import {
	Container,
	Typography,
	TextField,
	Button,
	FormControlLabel,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Logo from '../images/favicon.png';

export default function SignUP() {
	return (
		<div className="SignUP">
			<Grid container>
				<Grid item xs={12} md={5}>
					<div className="SignUpNam">
						<Typography className="school" variant="h6">
							<img
								style={{
									height: '80px',
									marginRight: '10px',
									backgroundColor: ' transparent',
								}}
								src={Logo}
							/>
							Namangan <br /> International <br /> School
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} md={7}>
					<div className="div">
						<Container>
							<Grid container rowSpacing={4}>
								<Grid item xs={0} md={2}></Grid>
								<Grid item xs={12} md={8}>
									<Typography
										variant="h5"
										fontWeight="800"
										style={{
											borderLeft: '5px solid #FFBA00',
											padding: '0 10px',
										}}
									>
										Login to Your{' '}
										<span style={{ fontWeight: '50' }}>Account</span>
									</Typography>
									<br />
									<Typography variant="subtitle">
										Don't have an account? &nbsp;
										<Link to="/signup">
											<a className="newAccount">Create one here </a>
										</Link>
									</Typography>
									<br />
									<br />
									<form>
										<TextField
											required
											type="text"
											id="name"
											label="Your Name"
											variant="standard"
											fullWidth
										/>
										<br />
										<br />
										<TextField
											required
											type="password"
											id="password"
											label="Password"
											variant="standard"
											fullWidth
										/>
										<FormControlLabel
											control={<Checkbox default />}
											label="Remember me"
										/>
										<Link to="/forgot">
											<a href="" className="forgot">
												Forgot Password?
											</a>
										</Link>
										<br /> <br />
										<Button type="submit" variant="contained">
											Login
										</Button>
									</form>
								</Grid>
								<Grid item xs={0} md={2}></Grid>
							</Grid>
						</Container>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
