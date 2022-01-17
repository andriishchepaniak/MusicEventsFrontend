import { AlbumsApi } from "../../api/AlbumsApi";

const albumsActionTypes = {
    SET_ALBUMS: 'SET_ALBUMS'
}

let initialState = {
    albums: [],
}

const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case albumsActionTypes.SET_ALBUMS:
            return {
                ...state,
                albums: action.albums,
            }
        default:
            return state;
    }
}

export const setAlbumsActionCreator = (albums) => {
    return {
        type: albumsActionTypes.SET_ALBUMS,
        albums
    }
}

export const setAlbumsThunk = (artistId) => {
    return dispatch => {
        AlbumsApi.getAlbumsByArtistId(artistId)
        .then(response => {
            console.log(response)
            dispatch(setAlbumsActionCreator(response.data));
        })
    }
}

export default albumsReducer;