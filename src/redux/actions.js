import {GET_USER} from "./actionTypes";
const getUser = user => ({
    type: GET_USER,
    payload: {
        user
    }
});
export {getUser};