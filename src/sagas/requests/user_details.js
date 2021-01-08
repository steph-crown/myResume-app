import axios from 'axios';

// This function makes the API call
export function getUserDetails(url, data) {
    return axios.request({
        method: 'post',
        url,
        data
    })
    // console.log(url)
    // return 90
}