import { AuthApi } from "../../api/AuthApi"
import { loginThunk } from "./authReducer"
import {setUserThunk} from "./profileReducer"


const registerActionTypes = {
    REGISTER: 'REGISTER',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_FIRSTNAME: 'UPDATE_FIRSTNAME',
    UPDATE_LASTNAME: 'UPDATE_LASTNAME'
}

let initialState = {
    user: null,
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case registerActionTypes.UPDATE_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case registerActionTypes.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case registerActionTypes.UPDATE_FIRSTNAME:
            return {
                ...state,
                firstName: action.firstName
            }
        case registerActionTypes.UPDATE_LASTNAME:
            return {
                ...state,
                lastName: action.lastName
            }
        case registerActionTypes.REGISTER:
            return {
                ...state,
                user: action.user,
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        default:
            return state;
    }
}

export const registerActionCreator = (user) => {
    return {
        type: registerActionTypes.REGISTER,
        user
    }
}
export const updateEmailActionCreator = (email) => {
    return {
        type: registerActionTypes.UPDATE_EMAIL,
        email
    }
}
export const updatePasswordActionCreator = (password) => {
    return {
        type: registerActionTypes.UPDATE_PASSWORD,
        password
    }
}
export const updateFirstNameActionCreator = (firstName) => {
    return {
        type: registerActionTypes.UPDATE_FIRSTNAME,
        firstName
    }
}
export const updateLastNameActionCreator = (lastName) => {
    return {
        type: registerActionTypes.UPDATE_LASTNAME,
        lastName
    }
}

export const registerThunk = (email, password, firstName, lastName) => {
    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    return dispatch => {
        AuthApi.register(user)
            .then(response => {
            console.log(response);
            dispatch(registerActionCreator(response.data));
            dispatch(loginThunk(response.data.email, response.data.password));
            dispatch(setUserThunk(response.data.id));
        });
    }
}

export default registerReducer;