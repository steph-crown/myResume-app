import loginReducer from "./login_reducer";

import signupReducer from "./signup_reducer";

import userDetailsReducer from "./user_details.reducer";

import errorReducer from './error'


import { combineReducers } from "redux";

const rootReducer = combineReducers({
    loginReducer,
    signupReducer,
    userDetailsReducer,
    errorReducer
});
 
export default rootReducer;