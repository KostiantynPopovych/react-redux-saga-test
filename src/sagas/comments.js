import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { rootURL } from '../helpers/api';

import {    
    FETCH_POST_COMMENTS_START
} from '../store/comments/actionTypes';

import {
    fetchPostCommentsSuccess, 
    fetchPostCommentsFailure 
} from '../store/comments/actionCreators';

export function* watchFetchPostComments() {
    yield takeEvery(FETCH_POST_COMMENTS_START, fetchPostCommentsList);
};

function* fetchPostCommentsList({payload}) {
    const url = `${rootURL}/posts/${payload}/comments`;

    try {
        const response = yield call(axios.get, url);  
        const postComments = response.data; 

        yield put(fetchPostCommentsSuccess(postComments));
    } catch(err) {
        yield put(fetchPostCommentsFailure());
    }
} 