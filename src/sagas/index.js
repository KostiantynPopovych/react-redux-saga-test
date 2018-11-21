import { fork } from 'redux-saga/effects';

import { 
    watchFetchPosts,
    watchFetchPost
} from './posts';

import {
    watchFetchComments
} from './comments'

export default function * () {
    yield [
        fork(watchFetchPosts),
        fork(watchFetchPost),
        fork(watchFetchComments)
    ];
}