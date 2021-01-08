import { call, put } from "redux-saga/effects";
import { error, set_user_details } from "../../store/actions/actions";
import { getUserDetails } from "./../requests/user_details";

export function* handleGetUserData(action) {
    try {
        // Calls the getUserDetails to make the request
        const response = yield call(getUserDetails, action.payload.url, action.payload.data);

        // Gets the data gotten from the response gotten
        const {data} = response;

        // If there is an error in the data
        if (data.error) {
            // Dispatches a redux action that stores the error in the reducer
            yield put(error(data.error));
        }else {
            // Dispatches a redux action that stores the data in the reducer
            yield put(set_user_details(data));
        }

    }catch(err) {
        console.log(err);
    }
}