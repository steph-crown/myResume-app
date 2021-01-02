import * as ACTION_TYPES from './../actions/action_types';


const initialState = {
    signupName: '',
    signupEmailAddress: '',
    signupPassword: ''
};


const signupReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SIGNUP_INPUT:
            return {
                ...state,
                [action.payload.tag]: action.payload.text
            }
        default:
            return state;
    }
}

export default signupReducer;