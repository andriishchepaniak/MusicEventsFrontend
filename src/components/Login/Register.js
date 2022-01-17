import React from "react";
import {Form, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import { registerThunk, updateEmailActionCreator, updateFirstNameActionCreator, updateLastNameActionCreator, updatePasswordActionCreator } from "../../redux/reducers/registerReducer";

const Register = () => {
    var state = useSelector(state => state.registerPage);

    var dispatch = useDispatch();

    const handleEmail = (e) => {
        dispatch(updateEmailActionCreator(e.target.value));
    }

    const handlePassword = (e) => {
        dispatch(updatePasswordActionCreator(e.target.value));
    }

    const handleFirstName = (e) => {
        dispatch(updateFirstNameActionCreator(e.target.value));
    }

    const handleLastName = (e) => {
        dispatch(updateLastNameActionCreator(e.target.value));
    }

    const register = () => {
        dispatch(registerThunk(state.email, state.password, state.firstName, state.lastName));
    }
    return (
        <Form>
            <h2>Sign Up</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={
                        state.email
                    }
                    onChange={handleEmail}
                    type="email"
                    placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={
                        state.password
                    }
                    onChange={handlePassword}
                    type="password"
                    placeholder="Password"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>FirstName</Form.Label>
                <Form.Control value={
                        state.firstName
                    }
                    onChange={handleFirstName}
                    placeholder="firstName"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>LastName</Form.Label>
                <Form.Control value={
                        state.lastName
                    }
                    onChange={handleLastName}
                    placeholder="lastName"/>
            </Form.Group>
            
            <NavLink to={"/profile"}>
                <Button onClick={
                        () => register()
                    }
                    variant="primary">
                    Register
                </Button>
            </NavLink>
        </Form>

    )
}

export default Register;
