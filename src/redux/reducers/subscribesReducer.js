import { SubscribesApi } from "../../api/SubscribesApi";


const subscribesActionTypes = {
    SET_SUBSCRIBES: 'SET_SUBSCRIBES',
    SUBSCRIBE_TO_ARTIST: 'SUBSCRIBE_TO_ARTIST'
}

let initialState = {
    artistSubscribes: [],
}

const subscribesReducer = (state = initialState, action) => {
    switch (action.type) {
        case subscribesActionTypes.SET_SUBSCRIBES:
            return {
                ...state,
                artistSubscribes: action.artistSubscribes
            }
        case subscribesActionTypes.SUBSCRIBE_TO_ARTIST:
            return {
                ...state,
                artistSubscribes: [action.artistSubscribes, ...state.artistSubscribes]
            }
        default:
            return state;
    }
}

export const setSubscribesActionCreator = (artistSubscribes) => {
    return {
        type: subscribesActionTypes.SET_SUBSCRIBES,
        artistSubscribes
    }
}
export const subscribeToArtistThunk = (artistId, token) => {
    console.log(artistId);
    console.log(token);
    return dispatch => {
        SubscribesApi.subscribeToArtist(artistId, token)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
}
export const unSubscribeFromArtistThunk = (artistId, token) => {
    console.log(artistId);
    console.log(token);
    return dispatch => {
        SubscribesApi.unSubscribeFromArtist(artistId, token)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
}
export const subscribeToCityThunk = (cityId, token) => {
    return dispatch => {
        SubscribesApi.subscribeToCity(cityId, token)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
}
export const unSubscribeFromCityThunk = (cityId, token) => {
    return dispatch => {
        SubscribesApi.unSubscribeFromCity(cityId, token)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
}
export const subscribeToArtistAndCityThunk = (artistId, cityId, token) => {
    return dispatch => {
        SubscribesApi.subscribeToArtistAndCity(artistId, cityId, token)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
}
export const unSubscribeFromArtistAndCityThunk = (artistId, cityId, token) => {
    return dispatch => {
        SubscribesApi.unSubscribeFromArtistAndCity(artistId, cityId, token)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
}

export default subscribesReducer;