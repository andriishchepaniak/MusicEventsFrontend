import { AuthApi } from "../../api/AuthApi"
import {setUserThunk} from "./profileReducer"


const authActionTypes = {
    LOGIN: 'LOGIN',
    UPDATE_LOGIN: 'UPDATE_LOGIN',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD'
}

let initialState = {
    user: null,
    login: '',
    password: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.UPDATE_LOGIN:
            return {
                ...state,
                login: action.login
            }
        case authActionTypes.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case authActionTypes.LOGIN:
            return {
                ...state,
                user: action.user,
                login: '',
                password: ''
            }
        default:
            return state;
    }
}

export const loginActionCreator = (user) => {
    return {
        type: authActionTypes.LOGIN,
        user
    }
}
export const updateLoginActionCreator = (login) => {
    return {
        type: authActionTypes.UPDATE_LOGIN,
        login
    }
}
export const updatePasswordActionCreator = (password) => {
    return {
        type: authActionTypes.UPDATE_PASSWORD,
        password
    }
}


export const loginThunk = (login, password) => {
    return dispatch => {
        AuthApi.login(login, password)
            .then(response => {
            console.log(response);
            dispatch(loginActionCreator(response.data));
            dispatch(setUserThunk(response.data.id));
        });
    }
}

export default authReducer;