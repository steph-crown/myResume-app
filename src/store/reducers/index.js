import loginReducer from "./login_reducer";

import signupReducer from "./signup_reducer";

import userDetailsReducer from "./user_details.reducer";


import { combineReducers } from "redux";

const rootReducer = combineReducers({
    loginReducer,
    signupReducer,
    userDetailsReducer
});
 
export default rootReducer;