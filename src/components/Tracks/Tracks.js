import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import { getTracksByAlbumIdThunk } from "../../redux/reducers/tracksReducer";
import Track from "./Track";

const Tracks = (props) => {
    var tracks = useSelector(state => state.tracksPage.tracks);
    var dispatch = useDispatch();
    const {artistId, albumId} = useParams();
    useEffect(() => {
        dispatch(getTracksByAlbumIdThunk(albumId));
    }, []);
    return tracks.length === 0 ? (<div>No tracks</div>) : (tracks.map(track => <Track track={track}/>))
}

export default Tracks;
