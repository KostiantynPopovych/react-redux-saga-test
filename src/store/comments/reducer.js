import { 
    FETCH_POST_COMMENTS_START,
    FETCH_POST_COMMENTS_SUCCESS,
    FETCH_POST_COMMENTS_FAILURE,
    SAVE_COMMENT_START,
    SAVE_COMMENT_SUCCESS,
    SAVE_COMMENT_FAILURE
} from '../comments/actionTypes';

const initialState = {
    postComments: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_POST_COMMENTS_START:
            return { ...state, loadingComments: true};

        case FETCH_POST_COMMENTS_SUCCESS:
            return { ...state,
                        loadingComments: false, 
                        postComments: [...payload], 
                        errorFatching: false
                    };
            
        case FETCH_POST_COMMENTS_FAILURE:
            return { ...state, 
                        loadingComments: false, 
                        errorFatching: true
                    };

        case SAVE_COMMENT_START:
        return { ...state, 
                    savingCommentStart: true};

        case SAVE_COMMENT_SUCCESS:
        const postComments = state.postComments;
            return { ...state,
                        savingCommentStart: false, 
                        errorCommentSaving: false,
                        postComments: [...postComments, {...payload}]
                    };
            
        case SAVE_COMMENT_FAILURE:
            return { ...state, 
                        savingCommentStart: false, 
                        errorCommentSaving: true
                    };

        default:
            return state
    }
};