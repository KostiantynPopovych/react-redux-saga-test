import creator from '../../helpers/action-creators-fabric';

import {
    FETCH_POST_COMMENTS_START,
    FETCH_POST_COMMENTS_SUCCESS,
    FETCH_POST_COMMENTS_FAILURE,
    SAVE_COMMENT_START,
    SAVE_COMMENT_SUCCESS,
    SAVE_COMMENT_FAILURE
} from '../comments/actionTypes';

const fetchPostComments = creator(FETCH_POST_COMMENTS_START, 'payload');
const fetchPostCommentsSuccess = creator(FETCH_POST_COMMENTS_SUCCESS, 'payload');
const fetchPostCommentsFailure = creator(FETCH_POST_COMMENTS_FAILURE);
const saveComment = creator(SAVE_COMMENT_START, 'payload');
const saveCommentSuccess = creator(SAVE_COMMENT_SUCCESS, 'payload');
const saveCommentFailure = creator(SAVE_COMMENT_FAILURE);

export {
    fetchPostComments,
    fetchPostCommentsSuccess,
    fetchPostCommentsFailure,
    saveComment,
    saveCommentSuccess,
    saveCommentFailure
};