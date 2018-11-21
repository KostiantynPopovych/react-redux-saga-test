import { 
    FETCH_COMMENTS_START,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
} from '../comments/actionTypes';

const initialState = {
    comments: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_COMMENTS_START:
            return { ...state, loadingComments: true};

        case FETCH_COMMENTS_SUCCESS:
            return { ...state,
                        loadingComments: false, 
                        comments: [...payload], 
                        errorFatching: false
                    };
            
        case FETCH_COMMENTS_FAILURE:
            return { ...state, 
                        loadingComments: false, 
                        errorFatching: true
                    };

        default:
            return state
    }
};