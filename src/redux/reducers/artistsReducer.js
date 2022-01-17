import { ArtistsApi } from "../../api/ArtistsApi"
import { UsersApi } from "../../api/UsersApi"

const artistsActionTypes = {
    SET_ARTISTS: 'SET_ARTISTS',
    UPDATE_ARTISTS_SEARCH: 'UPDATE_SEARCH',
    SET_USER_ARTISTS: 'SET_USER_ARTISTS'
}

let initialState = {
    artists: [],
    artistSearch: '',
    userArtists: []
}

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case artistsActionTypes.SET_ARTISTS:
            return {
                ...state,
                artists: action.artists,
                artistSearch: ''
            }
        case artistsActionTypes.UPDATE_ARTISTS_SEARCH:
            return {
                ...state,
                artistSearch: action.search
            }
        case artistsActionTypes.SET_USER_ARTISTS:
            return {
                ...state,
                userArtists: action.userArtists
            }
        default:
            return state;
    }
}

export const setArtistsActionCreator = (artists) => {
    return {
        type: artistsActionTypes.SET_ARTISTS,
        artists
    }
}
export const setUserArtistsActionCreator = (userArtists) => {
    return {
        type: artistsActionTypes.SET_USER_ARTISTS,
        userArtists
    }
}
export const updateArtistsSearchActionCreator = (search) => {
    return {
        type: artistsActionTypes.UPDATE_ARTISTS_SEARCH,
        search
    }
}

export const setArtistsThunk = (artistName) => {
    return dispatch => {
        ArtistsApi.getArtistsByName(artistName)
        .then(response => {
            dispatch(setArtistsActionCreator(response.data));
        });
    }
}
export const setUserArtistsThunk = (userId) => {
    return dispatch => {
        UsersApi.getUserArtists(userId)
        .then(response => {
            console.log(response);
            dispatch(setUserArtistsActionCreator(response.data));
        });
    }
}

export default artistsReducer;