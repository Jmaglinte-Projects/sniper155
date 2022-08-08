import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Modal, Box, Typography, TextField, useFormControl, FormControl, OutlinedInput, FormHelperText
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment";
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { createReceipt } from '../../actions/receipts';
import { CREATE } from '../../constants/actionTypes';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 2,
  p: 4,
  borderRadius: 2
};

const initialState = { receipt_note: '', receipt_image: '', receipt_date: '' };

const AddModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [form, setForm] = React.useState(initialState);
	const [receiptDate, setReceiptDate] = React.useState<any | null>(new Date());
	const [imageValue, setImageValue] = React.useState<any | String>(null);

	const onSubmit = () => {
		dispatch(createReceipt(form));
	}

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	React.useEffect(() => {
		setForm({ ...form, receipt_date: receiptDate, receipt_image: imageValue });
		console.log(imageValue)
	}, [receiptDate, imageValue]);

	const encodeImageFileAsURL = (element) => {
		// https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript
		var file = element.files[0];
		var reader = new FileReader();
		reader.onloadend = () => {
			setImageValue(reader.result);
		}
		reader.readAsDataURL(file);
	}  

  return (
	<div>
		<Button onClick={handleOpen} variant="contained" endIcon={<AddIcon />}>
			Add
		</Button>
		<Modal
		open={open}
		onClose={handleClose}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography variant="h6" gutterBottom component="div">
					Add new reciept:
				</Typography>
				<br/>
				<Box component="form" noValidate autoComplete="off">
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<Grid container spacing={3} sx={{ mb: 2 }} >
							<Grid item xs={12}>
								<FormControl fullWidth >
									<TextField
										id="note"
										label="Note"
										name="receipt_note"
										onChange={handleChange}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth >
									<DateTimePicker label="Date"
										value={receiptDate}
										onChange={(newValue) => setReceiptDate(moment(newValue).format())}
										renderInput={(params) => <TextField {...params} />}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth >
									<Typography variant='subtitle2'>Attachment: </Typography>
									<TextField
										id="selectedFile"
										type="file"
										name="receipt_image"
										onChange={(e) => encodeImageFileAsURL(e.target)}
									/>
									<img src="" alt="" />
								</FormControl>
							</Grid>
						</Grid>
						<Button variant="contained" onClick={onSubmit} endIcon={<SendIcon />}>
							Submit
						</Button>
					</LocalizationProvider>
				</Box>
			</Box>
		</Modal>
    </div>
  )
}

export default AddModal