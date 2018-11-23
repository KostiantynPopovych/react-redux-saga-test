import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import posts from './posts/reducer';
import comments from './comments/reducer';

export default combineReducers({posts, comments, form: formReducer});