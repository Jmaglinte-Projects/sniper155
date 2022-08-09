import * as React from 'react';
import { Link, useLocation } from "react-router-dom";
import decode from 'jwt-decode';
import { AppBar, Button, TextField, Box, Menu, Toolbar, IconButton, Typography, Container, Avatar, Tooltip, MenuItem } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import  './styles.scss';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { useNavigate } from 'react-router-dom';

import * as actionType from '../../../constants/actionTypes';

const pages = [
	{
		id: 1,
		title: 'Receipts',
		link: '/'
	}
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
		<Container maxWidth="xl">
			<Toolbar disableGutters>
			<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
				SNIPER155
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
					<Typography textAlign="center">{page.title}</Typography>
					</MenuItem>
				))}
				</Menu>
			</Box>
			<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
			<Typography
				variant="h5"
				noWrap
				component="a"
				href=""
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
				LOGO
			</Typography>
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				{pages.map((page) => (
			
				<Link className="navLink" key={page.id} to={page.link} >
					{page.title}
				</Link>
				))}
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
				<Button variant="contained" startIcon={<LoginIcon />} onClick= { () => navigate('/signin')}>
					Signin
				</Button>
				)}


			</Box>
			</Toolbar>
		</Container>
		</AppBar>
	);
};
export default Header;
