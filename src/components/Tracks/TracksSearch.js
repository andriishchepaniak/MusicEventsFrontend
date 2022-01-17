import React, { useEffect, useState } from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cleanTracksActionCreator, getTracksByNameThunk, updateTracksSearchActionCreator } from "../../redux/reducers/tracksReducer";
import Track from "./Track";

const TracksSearch = (props) => {

    var state = useSelector(state => state.tracksPage);
    var dispatch = useDispatch();
    const getTracks = (search) => {
        dispatch(getTracksByNameThunk(search));
    }

    useEffect(() => {
        dispatch(cleanTracksActionCreator());
    }, [])
    const handleChange = (event) => {
        dispatch(updateTracksSearchActionCreator(event.target.value));
    }
    
    return (
        <div>
            <InputGroup size="lg">
                <FormControl value={state.search} onChange={handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                <Button onClick={() => getTracks(state.search)} variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            {state.tracks.length !== 0
                ? state.tracks.map(track => <Track key={track.id} track={track} />)
                : <div>No match</div>}
        </div>

    )
}

export default TracksSearch;
