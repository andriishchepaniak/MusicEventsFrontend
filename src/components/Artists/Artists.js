import React, { useEffect } from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setArtistsThunk, setUserArtistsThunk, updateArtistsSearchActionCreator } from "../../redux/reducers/artistsReducer";
import Artist from "./Artist";

const Artists = (props) => {
    var user = useSelector(state => state.auth.user)
    var state = useSelector(state => state.artistsPage);
    var dispatch = useDispatch();
    const getArtists = (search) => {
        dispatch(setArtistsThunk(search));
    }

    const handleChange = (event) => {
        dispatch(updateArtistsSearchActionCreator(event.target.value));
    }

    useEffect(() => {
        if(user !== null) {
            dispatch(setUserArtistsThunk(user.id));
        }
    },[])
    
    
    return (
        <div>
            <InputGroup size="lg">
                <FormControl value={state.artistSearch} onChange={handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                <Button onClick={() => getArtists(state.artistSearch)} variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            {state.artists.length !== 0
                ? state.artists.map(artist => <Artist artists={state.userArtists} user={user} key={artist.id} artist={artist} />)
                : <div className="align-items-center">No match</div>}
        </div>

    )
}

export default Artists;
