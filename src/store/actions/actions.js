import * as ACTION_TYPES from './action_types';

export const signup_input = (text, tag) => {
    return {
        type: ACTION_TYPES.SIGNUP_INPUT,
        payload: {
            text,
            tag
        }
    }
}

export const login_input = (text, tag) => {
    return {
        type: ACTION_TYPES.LOGIN_INPUT,
        payload: {
            text,
            tag
        }
    }
}