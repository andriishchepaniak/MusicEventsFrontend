import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import {setUserThunk} from "../../redux/reducers/profileReducer";

const Profile = (props) => {

    var authUser = useSelector(state => state.auth.user);
    var dispath = useDispatch();

    var profile = useSelector(state => state.profile);
    useEffect(() => {
        if (authUser !== null) {
            dispath(setUserThunk(authUser.id));
        }
    }, []);

    return profile.user === null ? (
        <div style={{height: 500}} className="d-flex justify-content-center align-items-center">Sorry you are not logged</div>
    ) : (
        <Card bg="light" className="mt-3">
            <Card.Title className="ml-3">
                {
                profile.user.firstName + ' ' + profile.user.lastName
            } </Card.Title>
            <Card.Body>
                <Card.Text>
                    Email: {
                    profile.user.email
                }</Card.Text>
                <Card.Text>
                    Password: {
                    profile.user.password
                }</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Profile;
