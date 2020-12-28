import {GET_USER} from "../actionTypes";

function userReducer(state = {}, action) {
    switch(action.type) {
        case GET_USER: {
            const {user} = action.payload;
            return {
                ...state,
                user
            }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;