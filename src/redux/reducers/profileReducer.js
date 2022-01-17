import { UsersApi } from "../../api/UsersApi"

const profileActionTypes = {
    SET_USER: 'SET_USER',
}

let initialState = {
    user: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case profileActionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export const setUserActionCreator = (user) => {
    return {
        type: profileActionTypes.SET_USER,
        user
    }
}
export const setUserThunk = (userId) => {
    return dispatch => {
        UsersApi.getUser(userId)
        .then(response => {
            dispatch(setUserActionCreator(response.data));
        })
    }
}

export default profileReducer;