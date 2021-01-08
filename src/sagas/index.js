import { takeLatest } from "redux-saga/effects";
import { GET_USER_DETAILS } from "../store/actions/action_types";
import { handleGetUserData } from "./handlers/user_details";

// This is where we watch for any actions that have been dispatched by the redux store and we map it to the handler functions that will call the request that makes the api calls
export function* watcherSaga() {

    // Whenever a GET_USER_DETAILS action is dispatched, this function will take it and call the handleGetUserData function
    yield takeLatest(GET_USER_DETAILS, handleGetUserData)
}