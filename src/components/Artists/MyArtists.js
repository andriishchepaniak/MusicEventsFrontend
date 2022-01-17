import React, { useEffect } from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setArtistsThunk, setUserArtistsThunk, updateArtistsSearchActionCreator } from "../../redux/reducers/artistsReducer";
import Artist from "./Artist";

const MyArtists = (props) => {
    var user = useSelector(state => state.auth.user)
    var state = useSelector(state => state.artistsPage);
    var dispatch = useDispatch();

    useEffect(() => {
        if(user !== null) {
            dispatch(setUserArtistsThunk(user.id));
        }
    },[])
    
    return (
        <div>
            {state.userArtists.length !== 0
                ? state.userArtists.map(artist => <Artist artists={state.userArtists} user={user} key={artist.id} artist={artist} />)
                : <div className="align-items-center">No artists</div>}
        </div>

    )
}

export default MyArtists;
