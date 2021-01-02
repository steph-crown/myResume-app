import * as ACTION_TYPES from './../actions/action_types';


const initialState = {
    loginEmailAddress: "",
    loginPassword: ""
}

const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_INPUT:
            return {
                ...state,
                [action.tag]: action.payload
            };
            break;
        default:
            return state;
            break;
    }
}

export default loginReducer;