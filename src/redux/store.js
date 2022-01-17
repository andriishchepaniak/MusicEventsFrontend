import {combineReducers, createStore, applyMiddleware} from 'redux';
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk';
import profileReducer from './reducers/profileReducer';
import artistsReducer from './reducers/artistsReducer';
import eventsReducer from './reducers/eventsReducer';
import tracksReducer from './reducers/tracksReducer'
import albumsReducer from './reducers/albumsReducer';
import citiesReducer from './reducers/citiesReducer';
import registerReducer from './reducers/registerReducer';
import artistAndCitiesReducer from './reducers/artistAndCitiesReducer';

let reducers = combineReducers({
    auth: authReducer,
    registerPage: registerReducer,
    profile: profileReducer,
    artistsPage: artistsReducer,
    citiesPage: citiesReducer,
    eventsPage: eventsReducer,
    tracksPage: tracksReducer,
    albumsPage: albumsReducer,
    artistAndCities: artistAndCitiesReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;