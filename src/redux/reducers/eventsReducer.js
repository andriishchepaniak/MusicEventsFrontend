import { UsersApi } from "../../api/UsersApi";
import { EventsApi } from "../../api/EventsApi";

const eventsActionTypes = {
    SET_EVENTS: 'SET_EVENTS',
    CLEAN_EVENTS: 'CLEAN_EVENTS',
    CHANGE_EVENTS_LOADING: 'CHANGE_EVENTS_LOADING'
}

let initialState = {
    events: [],
    eventsLoading: false
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case eventsActionTypes.SET_EVENTS:
            return {
                ...state,
                events: action.events,
            }
        case eventsActionTypes.CLEAN_EVENTS:
            return {
                ...state,
                events: []
            }
        case eventsActionTypes.CHANGE_EVENTS_LOADING:
            return {
                ...state,
                eventsLoading: action.eventsLoading
            }
        default:
            return state;
    }
}

export const setEventsActionCreator = (events) => {
    return {
        type: eventsActionTypes.SET_EVENTS,
        events
    }
}

export const cleanEventsActionCreator = () => {
    return {
        type: eventsActionTypes.CLEAN_EVENTS
    }
}
export const changeEventsLoadingActionCreator = (eventsLoading) => {
    return {
        type: eventsActionTypes.CHANGE_EVENTS_LOADING,
        eventsLoading
    }
}

export const setUserEventsThunk = (userId) => {
    return dispatch => {
        dispatch(changeEventsLoadingActionCreator(true));
        UsersApi.getUserEvents(userId)
        .then(response => {
            dispatch(setEventsActionCreator(response.data));
            dispatch(changeEventsLoadingActionCreator(false));
        });
    }
}
export const setArtistEventsThunk = (artistId) => {
    return dispatch => {
        EventsApi.getArtistsEvents(artistId)
        .then(response => {
            dispatch(setEventsActionCreator(response.data));
        });
    }
}
export const setCityEventsThunk = (cityId) => {
    return dispatch => {
        EventsApi.getCityEvents(cityId)
        .then(response => {
            dispatch(setEventsActionCreator(response.data));
        });
    }
}

export default eventsReducer;