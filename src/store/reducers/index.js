import loginReducer from "./login_reducer";

import signupReducer from "./signup_reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    signupReducer: signupReducer
});

export default rootReducer