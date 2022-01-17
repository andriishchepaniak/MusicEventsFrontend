import { ArtistsApi } from "../../api/ArtistsApi"
import { UsersApi } from "../../api/UsersApi"

const artistAndCitiesActionTypes = {
    UPDATE_ARTIST_ID: 'UPDATE_ARTIST_ID',
    UPDATE_CITY_ID: 'UPDATE_CITY_ID'
}

let initialState = {
    artistId: '',
    cityId: ''
}

const artistAndCitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case artistAndCitiesActionTypes.UPDATE_ARTIST_ID:
            return {
                ...state,
                artistId: action.artistId,
            }
        case artistAndCitiesActionTypes.UPDATE_CITY_ID:
            return {
                ...state,
                cityId: action.cityId
            }
        default:
            return state;
    }
}

export const updateArtistIdActionCreator = (artistId) => {
    return {
        type: artistAndCitiesActionTypes.UPDATE_ARTIST_ID,
        artistId
    }
}
export const updateCityIdActionCreator = (cityId) => {
    return {
        type: artistAndCitiesActionTypes.UPDATE_CITY_ID,
        cityId
    }
}

export default artistAndCitiesReducer;