import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { rootURL } from '../helpers/api';

import {    
    FETCH_COMMENTS_START
} from '../store/comments/actionTypes';

import {
    fetchCommentsSuccess, 
    fetchCommentsFailure 
} from '../store/comments/actionCreators';

export function* watchFetchComments() {
    yield takeEvery(FETCH_COMMENTS_START, fetchCommentsList);
};

function* fetchCommentsList(action) {
    const { payload } = action;
    const url = `${rootURL}/posts/${payload}/comments`;

    try {
        const response = yield call(axios.get, url);  
        const comments = response.data; 
        yield put(fetchCommentsSuccess(comments));
    } catch(err) {
        yield put(fetchCommentsFailure());
    }
} 