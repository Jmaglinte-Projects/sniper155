import React from 'react';
import './styles.scss';
import { Container, Box, Grid, Typography }  from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

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
					<motion.img src={bannerMain} alt="" style={{
						marginTop: '95px',
						position: 'relative',
						zIndex: '5'
					}} 
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1,
						 }}
					transition={{ duration: 1 }}
					/>
					<motion.img 
					initial={{ opacity: 0, x: '-600px', scale: 0.3 }} animate={{ opacity: 1, x: 0, scale: 1 }}
					transition={{ duration: 2, delay: .6 }}
					src={mini1} alt="" className='mini1' />
					
					<motion.img 
					initial={{ opacity: 0, scale: 0.1 }}
					animate={{ opacity: 1, scale: 1, }}
					transition={{ duration: 2, delay: .8 }}
					src={mini2} alt="" className='mini2' />

					<motion.img 
					initial={{ opacity: 0, scale: 0.1, y: '100px' }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 1.3, delay: .3 }}
					src={mini3} alt="" className='mini3' />
				</Box>
				<Box component="div" className="info">
					<AnimatePresence>
						<motion.div
						initial={{ opacity: 0, y: '50px' }}
						animate={{ y: 0, opacity: 1,}}
						transition={{ duration: 2, delay: 3 }}
						>
							<Typography variant="h6" sx={{
								fontSize: {
									sm: '20px',
									md: '40px',
									lg: '45px'
								},
								lineHeight: '100%'
							}} >It is not a race, <Box component="span" sx={{
								display: 'block',
								color: '#0df48f',
								fontSize: {
									xm: '40px',
									sm: '30px',
									md: '50px',
									lg: '60px'
								},
								textTransform: 'uppercase',
								margin: '20px auto'
							}}
							>it's a journey.</Box> Enjoy the moment.</Typography>
						</motion.div>
					</AnimatePresence>
				</Box>
			</Box> 
		</Container>
		
	</div>
		<img src={imgAfter} alt="" style={{ marginTop: '-1px' }}/>
	</>	
  )
}

export default Home