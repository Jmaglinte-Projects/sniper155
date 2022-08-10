import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import moment from "moment";
import { Paper, ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton, Button, Grid,
  Modal
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import ImageDialog from './ImageDialog';
import AddModal from './AddModal';
import { getReceipts, deleteReceipt } from '../../actions/receipts';



export default function Images() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [user, setUser] = React.useState<any | null>(localStorage.getItem('profile'));
  	const [userJson, setUserJson] = React.useState(JSON.parse(user));
	const receipts = useAppSelector(state => state.receipts)
	const [openDialog, setOpenDialog] = React.useState(false);
	const [imageDialog, setImageDialog] = React.useState("");

	React.useEffect(() => {
		dispatch(getReceipts());
	}, [dispatch]);
	
	const handleDelete = (id: number) => {
		dispatch(deleteReceipt(id));
	}

	const handleOpen = (data) => {
		setOpenDialog(true);
		setImageDialog(data);
	}

	return (
		<>
		<ImageDialog openDialog={openDialog} updateDialog={setOpenDialog} image={imageDialog} />
		<Grid container spacing={2} alignItems="stretch" >
			<Grid item xs={12} md={12}>
				<Grid container justifyContent="space-between" spacing={2}>
					<Grid item xs={12} sm={10} md={10}>
						<span>Khaeyud lang <i><b>@angkol</b></i> !!!</span>
					</Grid>
					<Grid item>
						<AddModal />
					</Grid>
				</Grid>
			</Grid>
			{receipts.map((item) => (
				<Grid item xs={12} sm={8} md={4} sx={{
						overflow: 'hidden',
						cursor: 'pointer',
						"&:hover img": {
							transition: 'all .4s ease',
							transform: 'scale(1.1)'
						}
					}} 
					onClick={ () => handleOpen(item) }
				>
					<ImageListItem >
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
								<DeleteForeverIcon />
							</Paper>
						) : null}
						
						<img
							key={item._id}
							src={`${item.receipt_image}`}
							alt={item.title}
							loading="lazy"
							style={{ transition: 'all .2s ease' }}
						/>
						<ImageListItemBar
							title={moment(item.receipt_date).format('YYYY/MM/DD')}
							subtitle={`by: ${item.receipt_creator.first_name}`}
						/>
					</ImageListItem>
				</Grid>
			))}
		</Grid>
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
