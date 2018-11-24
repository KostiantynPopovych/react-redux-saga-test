import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { rootURL } from '../helpers/api';

import {    
    FETCH_POST_COMMENTS_START,
    SAVE_COMMENT_START
} from '../store/comments/actionTypes';

import {
    fetchPostCommentsSuccess, 
    fetchPostCommentsFailure,
    saveCommentSuccess,
    saveCommentFailure
} from '../store/comments/actionCreators';

export function* watchFetchPostComments() {
    yield takeEvery(FETCH_POST_COMMENTS_START, fetchPostCommentsList);
};

export function* watchSaveComment() {
    yield takeEvery(SAVE_COMMENT_START, saveComment);
};

function* saveComment({payload}) {
    const url = `${rootURL}/posts`;

    try {
        const response = yield call(axios.post, url, {...payload});  
        const { comment: body, email, username: name, id}  = response.data;
        yield put(saveCommentSuccess({body, email, name, id}));
    } catch(e) {
        yield put(saveCommentFailure());
    }
}

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