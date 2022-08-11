import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';
import Swal from 'sweetalert2';

export const getReceipts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchReceipts();

		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createReceipt = (formData, setModalVisible) => async (dispatch) => {
	try {
		const { data } = await api.createReceipt(formData);

		dispatch({ type: CREATE, payload: data });
		setModalVisible(false);
		
		Swal.fire(
			'Created!',
			'Receipt has been created.',
			'success'
		)

	} catch (error) {
		console.log(error);
	}
};

export const deleteReceipt = (id) => async (dispatch) => {
	try {
		await api.deleteReceipt(id);

		dispatch({ type: DELETE, payload: id });
		Swal.fire(
			'Deleted!',
			'Receipt been deleted.',
			'success'
		)
	} catch (error) {
		console.log(error);
	}
};

//   export const updatePost = (id, post) => async (dispatch) => {
//     try {
//       const { data } = await api.updatePost(id, post);

//       dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   export const likePost = (id) => async (dispatch) => {
//     const user = JSON.parse(localStorage.getItem('profile'));

//     try {
//       const { data } = await api.likePost(id, user?.token);

//       dispatch({ type: LIKE, payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   export const deletePost = (id) => async (dispatch) => {
//     try {
//       await await api.deletePost(id);

//       dispatch({ type: DELETE, payload: id });
//     } catch (error) {
//       console.log(error);
//     }
//   };