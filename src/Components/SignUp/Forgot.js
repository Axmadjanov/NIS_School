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
import { Link } from 'react-router-dom';
import Logo from '../images/favicon.png';
import Grid from '@mui/material/Grid';

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
							<Grid container>
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
										Forget
										<span style={{ fontWeight: '50' }}> Password</span>
									</Typography>
									<br />
									<Typography variant="subtitle">
										Login to your account &nbsp;
										<Link to="/login">
											<a className="loginAccount">Click here </a>
										</Link>
									</Typography>
									<form>
										<br />
										<br />
										<TextField
											style={{ width: '100%' }}
											required
											type="email"
											id="password"
											label="Your Email"
											variant="standard"
											fullWidth
										/>
										<br /> <br />
										<Button type="submit" variant="contained">
											Sign Up
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
