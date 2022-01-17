import React from "react";
import {Form, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk, updateLoginActionCreator, updatePasswordActionCreator} from "../../redux/reducers/authReducer";
import {Link, NavLink} from "react-router-dom";

const Login = () => {
    var state = useSelector(state => state.auth);

    var dispatch = useDispatch();

    const handleLogin = (e) => {
        dispatch(updateLoginActionCreator(e.target.value));
    }

    const handlePassword = (e) => {
        dispatch(updatePasswordActionCreator(e.target.value));
    }

    const login = () => {
        dispatch(loginThunk(state.login, state.password));
    }
    return (
        <Form>
            <h2>Sign In</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={
                        state.login
                    }
                    onChange={handleLogin}
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <NavLink to={"/profile"}>
                <Button onClick={
                        () => login()
                    }
                    variant="primary">
                    Login
                </Button>
            </NavLink>
        </Form>

    )
}

export default Login;
