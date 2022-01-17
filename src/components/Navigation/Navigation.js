import React from "react";
import {Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
    return (
        <Nav className="flex-column">
            <Link to="/profile">My profile</Link>
            <Link to="/myEvents">My events</Link>
            <Link to="/subscribes">My subscribes</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/cities">Cities</Link>
            <Link to="/artistAndCities">ArtistAndCities</Link>
            <Link to="/tracks">Tracks</Link>
            <Link to="/recognize">Recognizer</Link>
        </Nav>
    )
}

export default Navigation;
