import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {subscribeToCityThunk, unSubscribeFromCityThunk} from '../../redux/reducers/subscribesReducer';

const City = (props) => { // console.log(props);
    var authUser = useSelector(state => state.auth.user);
    var dispatch = useDispatch();

    const subscribe = () => {
        dispatch(subscribeToCityThunk(props.city.metroArea.id, authUser.token));
    }
    const unSubscribe = () => {
        dispatch(unSubscribeFromCityThunk(props.city.metroArea.id, authUser.token));
    }

    const SubscribeButton = () => {
        console.log("Button");
        console.log(props.cities)
        console.log(props.city.metroArea.id)
        return props.cities.filter(c => c.cityApiId === props.city.metroArea.id).length > 0 ? <Button onClick={unSubscribe}
            variant="outline-primary">UnSubscribe</Button> : <Button onClick={subscribe}
            variant="outline-primary">Subscribe</Button>;
    }

    return (
        <Card className="mt-3">
            <Card.Body>
                <Card.Text>{
                    props.city.metroArea.id
                }</Card.Text>
                <Card.Text>{
                    props.city.metroArea.displayName
                }</Card.Text>
                <Card.Text>{
                    props.city.metroArea.country.displayName
                }</Card.Text>
                <Card.Text>
                    <Card.Link>
                        <Link to={
                            "/cities/" + props.city.metroArea.id + "/events"
                        }>Events</Link>
                    </Card.Link>
                </Card.Text>
                <Card.Text>
                    <Card.Link href={
                        props.city.metroArea.uri
                    }>official site</Card.Link>
                    <Card.Link>
                        <Link to={
                            "/cities/" + props.city.metroArea.id + "/events"
                        }>Events</Link>
                    </Card.Link>

                </Card.Text>
                {
                props.user !== null ? <SubscribeButton cities={
                        props.cities
                    }
                    id={
                        props.city.metroArea.id
                    }/> : <div>you are not logged</div>
            } </Card.Body>
        </Card>
    )
}

export default City;
