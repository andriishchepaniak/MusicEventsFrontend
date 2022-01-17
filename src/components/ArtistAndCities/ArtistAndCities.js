import React, {useEffect} from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { updateArtistIdActionCreator, updateCityIdActionCreator } from "../../redux/reducers/artistAndCitiesReducer";
import { subscribeToArtistAndCityThunk } from "../../redux/reducers/subscribesReducer";

const ArtistAndCities = (props) => {
    var user = useSelector(state => state.auth.user)
    var artistAndCities = useSelector(state => state.artistAndCities);
    var dispatch = useDispatch();
    const subscribe = (artistId, cityId) => {
        dispatch(subscribeToArtistAndCityThunk(artistId, cityId, user.token));
    }

    const handleArtistIdChange = (event) => {
        dispatch(updateArtistIdActionCreator(event.target.value));
    }
    const handleCityIdChange = (event) => {
        dispatch(updateCityIdActionCreator(event.target.value));
    }

    return (
        <div>
            <InputGroup size="lg">
                <FormControl value={
                        artistAndCities.artistId
                    }
                    onChange={handleArtistIdChange}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"/>

            </InputGroup>
            <InputGroup size="lg">
                <FormControl value={
                        artistAndCities.cityId
                    }
                    onChange={handleCityIdChange}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"/>

            </InputGroup>
            <InputGroup size="lg">
                <Button onClick={
                        () => subscribe(artistAndCities.artistId, artistAndCities.cityId)
                    }
                    variant="outline-secondary"
                    id="button-addon2">
                    Subscribe
                </Button>
            </InputGroup>
        </div>

    )
}

export default ArtistAndCities;
