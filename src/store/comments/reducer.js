import { 
    FETCH_POST_COMMENTS_START,
    FETCH_POST_COMMENTS_SUCCESS,
    FETCH_POST_COMMENTS_FAILURE,
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

        default:
            return state
    }
};