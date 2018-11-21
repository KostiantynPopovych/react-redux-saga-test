import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { rootURL } from '../helpers/api';
import { 
    FETCH_POSTS_START,
    FETCH_POST_START,
} from '../store/posts/actionTypes';

import { 
    fetchPostsSuccess, 
    fetchPostsFailure,
    fetchPostSuccess, 
    fetchPostFailure,
} from '../store/posts/actionCreators'

export function* watchFetchPosts() {
    yield takeLatest(FETCH_POSTS_START, fetchPostsList);
};

export function* watchFetchPost() {
    yield takeEvery(FETCH_POST_START, fetchPostList);
};

function* fetchPostsList() {
    const url = `${rootURL}/posts`;

    try {
        const response = yield call(axios.get, url);        
        const posts = response.data;

        yield put(fetchPostsSuccess(posts));
    } catch(err) {
        yield put(fetchPostsFailure());
    }
} 

function* fetchPostList({payload}) {
    const url = `${rootURL}/posts/${payload}`;

    try {
        const response = yield call(axios.get, url);  
        const post = response.data; 
        yield put(fetchPostSuccess(post));
    } catch(err) {
        yield put(fetchPostFailure());
    }
} 