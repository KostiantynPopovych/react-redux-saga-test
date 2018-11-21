import creator from '../../helpers/action-creators-fabric';

import {
    FETCH_COMMENTS_START,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE
} from '../comments/actionTypes';

const fetchComments = creator(FETCH_COMMENTS_START, 'payload');
const fetchCommentsSuccess = creator(FETCH_COMMENTS_SUCCESS, 'payload');
const fetchCommentsFailure = creator(FETCH_COMMENTS_FAILURE);

export {
    fetchComments,
    fetchCommentsSuccess,
    fetchCommentsFailure
};