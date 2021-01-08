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

export const get_user_details = (url, data) => {
    return {
        type: ACTION_TYPES.GET_USER_DETAILS,
        payload: {
            url,
            data
        }
    }
}

export const set_user_details = (userDetails) => {
    return {
        type: ACTION_TYPES.SET_USER_DETAILS,
        payload: {
            userDetails
        }
    }
}