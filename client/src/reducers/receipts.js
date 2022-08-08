import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

  export default (receipts = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...receipts, action.payload];
      case UPDATE:
        return receipts.map((receipt) => (receipt._id === action.payload._id ? action.payload : receipt));
      case DELETE:
        return receipts.filter((receipt) => receipt._id !== action.payload);
      default:
        return receipts;
    }
  };