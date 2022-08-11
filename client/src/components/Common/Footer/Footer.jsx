import React from 'react'
import { Typography, Grid, Alert, AlertTitle, Box, Collapse, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
	const [open, setOpen] = React.useState(true);

  return (
	<footer>
		<Grid container spacing={2} maxWidth="xl" sx={{ marginTop: '45px' }}>
			<Grid item xm={12} sm={12} md={6} lg={6}>
				<Typography variant="caption">
				© Copyright 2022-2023 <a href='https://jmaglinte.netlify.app' target='_blank'>jmaglinte.netlify.app</a> All Rights Reserved
				</Typography>
			</Grid>
			<Grid item xm={12} sm={12} md={6} lg={6}>
				<Grid container spacing={1} justifyContent="end">
					<Grid item xm={2}>
						<a href="https://www.facebook.com/jmaglinte12" target="_blank"><FacebookIcon style={{ color: '#4267B2', fontSize: '25px', cursor: 'pointer' }} /></a>
					</Grid>
					<Grid item xm={2}>
						<a href="https://github.com/japusoy" target="_blank"><GitHubIcon style={{ color: '#000', fontSize: '25px', cursor: 'pointer' }} /></a>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</footer>
  )
}

export default Footer