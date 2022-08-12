import React from 'react';
import { Box } from '@mui/material';

function Banner(props) {
  return (
	<Box component="figure" sx={{
		width: '1920px',
		margin: 0,
		position: 'relative',
		marginLeft: '50%',
		transform: 'translate(-50%, 0)'
	}}><img src={props.image} /></Box>
  )
}

export default Banner