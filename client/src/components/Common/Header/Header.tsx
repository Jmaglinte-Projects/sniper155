import * as React from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import decode from 'jwt-decode';
import { AppBar, Grid, Button, TextField, Box, Menu, Toolbar, IconButton, Typography, Container, Avatar, Tooltip, MenuItem } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import  './styles.scss';
import mainLogo from './../../../assets/images/main-logo.png';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { useNavigate } from 'react-router-dom';

import * as actionType from '../../../constants/actionTypes';

const pages = [
	{
		id: 1,
		title: 'Receipt',
		link: '/receipt'
	}
];
const settings = ['Logout'];

const Header = () => {

	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
	const [user, setUser] = React.useState<any | null>(localStorage.getItem('profile'));
	const [userJson, setUserJson] = React.useState(JSON.parse(user));

	const logout = () => {
		dispatch({ type: actionType.LOGOUT });
		setUser(null);
		window.location.reload();
	};

	React.useEffect(() => {
		setUser(localStorage.getItem('profile'));
		setUserJson(JSON.parse(user));

		const token = JSON.parse(user)?.token;
		if (token) {
		const decodedToken: any = decode(token);

		if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}


	}, [location, user]);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
		<div id='customHead' style={{ position: 'relative', width: '100%' }}>
			<Container>
				<Toolbar disableGutters sx={{ position: 'relative', zIndex: '5' }}>
				<Grid container
					sx={{ width: '130px', marginRight: '10px',
						display: { xs: 'none', md: 'flex' }
					}}
				>
					<Link to="/"><img src={mainLogo} /></Link>
				</Grid>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
				</Typography>

				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleOpenNavMenu}
					color="inherit"
					>
					<MenuIcon />
					</IconButton>
					<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
					>
					{pages.map((page) => (
						<MenuItem key={page.id} onClick={handleCloseNavMenu}>
						<Typography textAlign="center">
							<NavLink key={page.id} to={page.link} style={{ color: '#000', textDecoration: 'none' }} >
								{page.title}
							</NavLink>
							</Typography>
						</MenuItem>
					))}
					</Menu>
				</Box>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="mainNav">
					{pages.map((page) => (
				
					<NavLink className="navLink" key={page.id} to={page.link}>
						{page.title}
					</NavLink>
					))}
				</Box>

				<Box
					sx={{
						mr: 2,
						display: { xs: 'flex', md: 'none' },
						flexGrow: 1,
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
					<Link to="/"><img src={mainLogo} style ={{  width: '130px', }} /></Link>
				</Box>

				<Box sx={{ flexGrow: 0 }}>

					{userJson?.result ? (
					<>
						<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
						</IconButton>
						</Tooltip>
						<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
						>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
							<Typography textAlign="center" onClick={setting == 'Logout' ? logout: () => {}}>{setting}</Typography>
							</MenuItem>
						))}
						</Menu>
					</>
					) : (
						<Box sx={{ cursor: 'pointer', "&:hover": {
							color: '#fff'
						} }}>
							<LoginIcon onClick= { () => navigate('/signin')} />
						</Box>
					)}
				</Box>
				</Toolbar>
			</Container>
		</div>
		</AppBar>
	);
};
export default Header;
