import {TracksApi} from '../../api/TracksApi'

const tracksActionTypes = {
    SET_TRACKS: 'SET_TRACKS',
    CLEAN_TRACKS: 'CLEAN_TRACKS',
    UPDATE_TRACKS_SEARCH: 'UPDATE_TRACKS_SEARCH'
}

let initialState = {
    tracks: [],
    search: '',
}

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case tracksActionTypes.SET_TRACKS:
            return {
                ...state,
                tracks: action.tracks,
                search: ''
            }
        case tracksActionTypes.CLEAN_TRACKS:
            return {
                ...state,
                tracks: [],
                search: ''
            }
        case tracksActionTypes.UPDATE_TRACKS_SEARCH:
            return {
                ...state,
                search: action.search
            }
        default:
            return state;
    }
}

export const setTracksActionCreator = (tracks) => {
    return {
        type: tracksActionTypes.SET_TRACKS,
        tracks
    }
}
export const cleanTracksActionCreator = () => {
    return {
        type: tracksActionTypes.CLEAN_TRACKS
    }
}
export const updateTracksSearchActionCreator = (search) => {
    return {
        type: tracksActionTypes.UPDATE_TRACKS_SEARCH,
        search
    }
}

export const getTracksByNameThunk = (trackName) => {
    return dispatch => {
        TracksApi.getTracksByName(trackName)
        .then(response => {
            //console.log(response);
            dispatch(setTracksActionCreator(response.data));
        })
    }
}
export const getTracksByAlbumIdThunk = (albumId) => {
    return dispatch => {
        TracksApi.getTracksByAlbumId(albumId)
        .then(response => {
            console.log(response);
            dispatch(setTracksActionCreator(response.data));
        })
    }
}

export default tracksReducer;