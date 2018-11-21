import creator from '../../helpers/action-creators-fabric';

import {
    FETCH_POST_COMMENTS_START,
    FETCH_POST_COMMENTS_SUCCESS,
    FETCH_POST_COMMENTS_FAILURE
} from '../comments/actionTypes';

const fetchPostComments = creator(FETCH_POST_COMMENTS_START, 'payload');
const fetchPostCommentsSuccess = creator(FETCH_POST_COMMENTS_SUCCESS, 'payload');
const fetchPostCommentsFailure = creator(FETCH_POST_COMMENTS_FAILURE);

export {
    fetchPostComments,
    fetchPostCommentsSuccess,
    fetchPostCommentsFailure
};