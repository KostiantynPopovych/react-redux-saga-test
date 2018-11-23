import { fork } from 'redux-saga/effects';

import { 
    watchFetchPosts,
    watchFetchPost,
} from './posts';

import {
    watchFetchPostComments,
    watchSaveComment
} from './comments'

export default function * () {
    yield [
        fork(watchFetchPosts),
        fork(watchFetchPost),
        fork(watchFetchPostComments),
        fork(watchSaveComment)
    ];
}