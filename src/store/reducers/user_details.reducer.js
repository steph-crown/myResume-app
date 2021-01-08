import * as ACTION_TYPES from './../actions/action_types';

const initialState = {
    userDetails: null
};

const userDetails_reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload.userDetails
            }
            default:
                return state;
    }
}

export default userDetails_reducer