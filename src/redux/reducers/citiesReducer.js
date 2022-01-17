import { CitiesApi } from "../../api/CitiesApi";
import { UsersApi } from "../../api/UsersApi";

const citiesActionTypes = {
    SET_CITIES: 'SET_CITIES',
    UPDATE_CITIES_SEARCH: 'UPDATE_SEARCH',
    CHANGE_LOADING: 'CHANGE_LOADING',
    SET_USER_CITIES: 'SET_USER_CITIES'
}

let initialState = {
    cities: [],
    citySearch: '',
    loading: false,
    userCities: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case citiesActionTypes.SET_CITIES:
            return {
                ...state,
                cities: action.cities,
                citySearch: ''
            }
        case citiesActionTypes.SET_USER_CITIES:
            return {
                ...state,
                userCities: action.userCities
            }
        case citiesActionTypes.UPDATE_CITIES_SEARCH:
            return {
                ...state,
                citySearch: action.search
            }
        case citiesActionTypes.CHANGE_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}

export const setCitiesActionCreator = (cities) => {
    return {
        type: citiesActionTypes.SET_CITIES,
        cities
    }
}
export const setUserCitiesActionCreator = (userCities) => {
    return {
        type: citiesActionTypes.SET_USER_CITIES,
        userCities
    }
}
export const updateCitiesSearchActionCreator = (search) => {
    return {
        type: citiesActionTypes.UPDATE_CITIES_SEARCH,
        search
    }
}
export const changeLoadingActionCreator = (loading) => {
    return {
        type: citiesActionTypes.CHANGE_LOADING,
        loading
    }
}

export const setUserCitiesThunk = (userId) => {
    return dispatch => {
        UsersApi.getUserCities(userId)
        .then(response => {
            console.log("thunk");
            console.log(response);
            dispatch(setUserCitiesActionCreator(response.data));
        });
    }
}

export const getCitiesThunk = (cityName) => {
    return dispatch => {
        dispatch(changeLoadingActionCreator(true));
        CitiesApi.getCitiesByName(cityName)
        .then(response => {
            dispatch(setCitiesActionCreator(response.data));
            dispatch(changeLoadingActionCreator(false));
        });
    }
}

export default citiesReducer;