import React from 'react';
import './styles.scss';
import { Container, Box, Grid, Typography }  from '@mui/material';

import imgAfter from '../../assets/images/bnr_after.png';
import bannerMain from '../../assets/images/banner/main.png';
import mini1 from '../../assets/images/banner/mini1.png';
import mini2 from '../../assets/images/banner/mini2.png';
import mini3 from '../../assets/images/banner/mini3.png';

function Home() {
  return (
	<>
	<div id="banner">
		<Container>
			<Box component="div" sx={{ position: 'relative' }}>
				<Box component="div" className="images" sx={{
					position: 'relative',
					width: '450px',
					maxWidth: '100%',
				}}>
					<img src={bannerMain} alt="" style={{
						marginTop: '95px',
						position: 'relative',
						zIndex: '5'
					}} />
					<img src={mini1} alt="" className='mini1' />
					<img src={mini2} alt="" className='mini2' />
					<img src={mini3} alt="" className='mini3' />
				</Box>
				<Box component="div" className="info">
					<Typography variant="h6" sx={{
						fontSize: '45px',
						lineHeight: '100%'
					}} >It is not a race, <Box component="span" sx={{
						display: 'block',
						color: '#0df48f',
						fontSize: '60px',
						textTransform: 'uppercase',
						margin: '20px auto'
					}}
					>it's a journey.</Box> Enjoy the moment.</Typography>
				</Box>
			</Box> 
		</Container>
		
	</div>
		<img src={imgAfter} alt="" style={{ marginTop: '-1px' }}/>
	</>	
  )
}

export default Home