import * as React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

const ImageDialog = (props) => {
	const handleClose = () => {
		props.updateDialog(false)
	}

	return (
		<Dialog
			open={props.openDialog}
			onClose={handleClose}
			fullWidth={true}
			maxWidth='md'
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			>
			<DialogTitle id="alert-dialog-title">
				{props.image.receipt_note}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					<img 
						src={props.image.receipt_image}
					/>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	)
}

export default ImageDialog