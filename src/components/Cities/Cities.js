import React, { useEffect } from "react";
import {InputGroup, FormControl, Button, Spinner, Row} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCitiesThunk, setUserCitiesThunk, updateCitiesSearchActionCreator } from "../../redux/reducers/citiesReducer";
import City from "./City";

const Cities = (props) => {
    var user = useSelector(state => state.auth.user)
    var state = useSelector(state => state.citiesPage);
    var dispatch = useDispatch();

    const getCities = (search) => {
        dispatch(getCitiesThunk(search));
    }


    const handleChange = (event) => {
        dispatch(updateCitiesSearchActionCreator(event.target.value));
    }
    
    useEffect(() => {
        if(user !== null) {
            dispatch(setUserCitiesThunk(user.id));
        }
    },[])

    return (
        <div>
            {
                console.log("Return", state)
            }
            <InputGroup size="lg">
                <FormControl value={state.citySearch} onChange={handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                <Button onClick={() => getCities(state.citySearch)} variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>

            {state.cities.length === 0
                ? state.loading 
                    ?   (<div style={{ height: 500 }} className="d-flex justify-content-center align-items-center">
                            <Spinner animation="border" size="lg" />
                        </div>)
                    : <div style={{ height: 500 }} className="d-flex justify-content-center align-items-center">No matches</div>
                : (state.cities.map(city => <City cities={state.userCities} city={city} />))
            }
        </div>

    )
}

export default Cities;
