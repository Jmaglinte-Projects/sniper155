import { combineReducers } from 'redux';

import receipts from './receipts';
import posts from './posts';
import auth from './auth';

export const reducers = combineReducers({ auth, posts, receipts });
