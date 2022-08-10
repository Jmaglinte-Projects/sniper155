import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import moment from "moment";
import { Paper, ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton, Button, Grid,
  Modal
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AddModal from './AddModal';
import DeleteIcon from '@mui/icons-material/Delete';


import { getReceipts, deleteReceipt } from '../../actions/receipts';



export default function Images() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [user, setUser] = React.useState<any | null>(localStorage.getItem('profile'));
  	const [userJson, setUserJson] = React.useState(JSON.parse(user));
	const receipts = useAppSelector(state => state.receipts)

	React.useEffect(() => {
		dispatch(getReceipts());
	}, [dispatch]);

	const handleDelete = (id: number) => {
		dispatch(deleteReceipt(id));
	}

	return (
		<>
		<ImageList id="receiptCon">
			<ImageListItem key="Subheader" cols={2}>
				<ListSubheader component="div">
					<Grid container spacing={2} maxWidth="xl">
						<Grid item xs={1} md={4} lg={11}>
							<span>Khaeyud lang <i><b>@angkol</b></i> !!!</span>
						</Grid>
						<Grid item>
							<AddModal />
						</Grid>
					</Grid>
				</ListSubheader>
			</ImageListItem>
			{receipts.map((item) => (
				<ImageListItem>
					{userJson?.result ? (
						<Paper
							onClick={() => handleDelete(item._id)}
							sx={{ boxShadow: 2, position: 'absolute', right: '6px', top: '6px',
									backgroundColor: 'aliceblue',
									color: '#e10000',
									cursor: 'pointer',
									borderRadius: '4px',
									'&:hover': {
										opacity: .6,
									}
								}}>
							<DeleteIcon />
						</Paper>
					) : null}
					
					<img
					key={item._id}
					src={`${item.receipt_image}`}
					alt={item.title}
					loading="lazy"
					/>
					<ImageListItemBar
						title={moment(item.receipt_date).format('YYYY/MM/DD')}
						subtitle={`by: ${item.receipt_creator_id}`}
						actionIcon={
						<IconButton
							sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
							aria-label={`info about ${item.receipt_creator_id}`}
						>
							<InfoIcon />
						</IconButton>
						}
					/>
				</ImageListItem>
			))}
		</ImageList>
		</>
	);
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },

];
