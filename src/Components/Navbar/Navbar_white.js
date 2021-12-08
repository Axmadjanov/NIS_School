import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../SCSS/Navbar.scss';
import '../SCSS/Navbar_white.scss';

import { useEffect, useRef, useState } from 'react';
import logo from '../images/logo-nis.png';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	let menuRef = useRef();

	// useEffect(() => {
	// 	document.addEventListener('mousedown', event => {
	// 		if (!menuRef.current.contains(event.target)) {
	// 			setOpen(false);
	// 		}
	// 	});
	// });

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	//* Navbar background changing

	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 40) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener('scroll', changeBackground);

	return (
		<Box
			className={navbar ? 'navbar active' : 'navbar'}
			ref={menuRef}
			sx={{
				paddingTop: '0px',
				display: 'flex',
				height: '80px',
				position: 'sticky',
				top: '0',
			}}
		>
			<AppBar
				className="navbar"
				sx={{
					backgroundColor: 'white',
					color: 'black',
					boxShadow: '0',
					borderTop: '1px solid rgba(88, 88, 88, 0.1)',
					borderBottom: '1px solid rgba(88, 88, 88, 0.5)',
				}}
				color="success"
				position=""
				onClose={handleDrawerClose}
			>
				<Container maxWidth="lg">
					<div
						style={{
							position: 'sticky',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<img style={{ width: '140px' }} src={logo} />
						<div style={{ display: 'flex' }}>
							<Link className="link2" to="/">
								<div className="nav_middle">Home</div>
							</Link>
							<Link className="link2" to="/courses">
								<div className="nav_middle">Courses</div>
							</Link>
							<Link className="link2" to="/event">
								<div className="nav_middle">Event and News</div>
							</Link>
							<Link className="link2" to="/gallery">
								<div className="nav_middle">Gallery</div>
							</Link>
							<Link className="link2" to="/about">
								<div className="nav_middle">About Us</div>
							</Link>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<FacebookIcon className="navIcons" />
							<TelegramIcon className="navIcons" />
							<InstagramIcon className="navIcons" />
							<SearchIcon className="navIcons " />
							<Toolbar
								className="toolbar"
								aria-label="open drawer"
								onClick={handleDrawerOpen}
								edge="start"
								sx={{ ...(open && {}) }}
							>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									onClick={handleDrawerOpen}
									edge="start"
									sx={{ ...(open && { display: '' }) }}
								>
									<MenuIcon
										className="MenuIcon"
										sx={{
											fontSize: '25px',
											color: 'black',
											...(open && { display: 'none' }),
										}}
									/>
									<CloseIcon
										className="MenuIcon"
										sx={{
											display: 'none',
											...(open && { display: '', color: 'black' }),
										}}
									/>
								</IconButton>
							</Toolbar>
						</div>
					</div>
				</Container>
			</AppBar>

			<Drawer
				sx={{
					position: 'absolute',
					width: drawerWidth,
					'& .MuiDrawer-paper': {
						width: '300px',
						boxSizing: 'border-box',
					},
				}}
				onClose={handleDrawerClose}
				variant="temporary"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<img src={Logo} style={{ width: '50%' }} />
					<IconButton
						sx={{ color: 'black', paddingLeft: '50px' }}
						onClick={handleDrawerClose}
					>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Container>
						<Link className="link2" to="/">
							<div className="link" style={{ borderTop: '1px dashed #e0e0e0' }}>
								Home
							</div>
						</Link>
						<Link className="link2" to="/courses">
							<div className="link">Courses</div>
						</Link>
						<Link className="link2" to="/event">
							<div className="link">Event and News</div>
						</Link>
						<Link className="link2" to="/gallery">
							<div className="link">Gallery</div>
						</Link>
						<Link className="link2" to="/about">
							<div className="link">About Us</div>
						</Link>
					</Container>
				</List>
			</Drawer>
			<Main style={{ padding: '0' }} open={open}>
				<DrawerHeader />
			</Main>
		</Box>
	);
}
