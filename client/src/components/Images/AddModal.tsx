import React from 'react'
import { Button, Grid, Modal, Box, Typography, TextField, useFormControl, FormControl, OutlinedInput, FormHelperText
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { FileBase } from 'react-file-base64';

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

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}


const AddModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [formData, setFormData] = React.useState(false);
	const [value, setValue] = React.useState(new Date());
	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const onSubmit = () => {
		alert('hey');
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
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth >
									<DateTimePicker label="Date"
									value={value}
									onChange={handleChange}
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
									/>
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