import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {setArtistEventsThunk, setEventsThunk} from '../../redux/reducers/eventsReducer';
import Event from "./Event";

const ArtistEvents = (props) => {
    var dispatch = useDispatch();
    var {id} = useParams();
    var events = useSelector(state => state.eventsPage.events);
    useEffect(() => {
        dispatch(setArtistEventsThunk(id));
    }, []);
    console.log(events);
    return events.length === 0 
        ? (<div style={{height: 500}} className="d-flex justify-content-center align-items-center">No events</div>) 
        : (events.map(e => <Event event={e} />))
}

export default ArtistEvents;
