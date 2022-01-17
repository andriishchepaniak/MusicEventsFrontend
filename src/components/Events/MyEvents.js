import axios from "axios";
import React, { useEffect, useState } from "react";
import {Spinner} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {cleanEventsActionCreator, setUserEventsThunk} from '../../redux/reducers/eventsReducer';
import Event from "./Event";

const MyEvents = (props) => {
    var authUser = useSelector(state => state.auth.user);
    var dispatch = useDispatch();
    
    var state = useSelector(state => state.eventsPage);
    useEffect(() => {
        dispatch(cleanEventsActionCreator());
        if(authUser !== null) {
            dispatch(setUserEventsThunk(authUser.id));
        }
    }, []);
    return state.events.length === 0 
        ? state.eventsLoading
            ? (<div style={{ height: 500 }} className="d-flex justify-content-center align-items-center">
                    <Spinner animation="border" size="lg" />
              </div>)
            : (<div style={{height: 500}} className="d-flex justify-content-center align-items-center">No events or you are not logged</div>) 
        : (state.events.map(e => <Event event={e} />))
}

export default MyEvents;
