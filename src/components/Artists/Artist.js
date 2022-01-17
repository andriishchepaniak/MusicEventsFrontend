import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { subscribeToArtistThunk, unSubscribeFromArtistThunk } from '../../redux/reducers/subscribesReducer';

const Artist = (props) => {
    console.log(props);
    var authUser = useSelector(state => state.auth.user);
    var dispatch = useDispatch();

    const subscribe = () => {
        dispatch(subscribeToArtistThunk(props.artist.id, authUser.token));
    }
    const unSubscribe = () => {
        dispatch(unSubscribeFromArtistThunk(props.artist.id, authUser.token));
    }

    const SubscribeButton = (props) => {
        return props.artists.filter(a => a.id === props.id).length > 0 
            ? <Button onClick={unSubscribe} variant="outline-primary">UnSubscribe</Button>
            : <Button onClick={subscribe} variant="outline-primary">Subscribe</Button>;
    }

    return (
        <Card className="mt-3">
            <Card.Body>
                <Card.Text>{
                    props.artist.id
                }</Card.Text>
                <Card.Text>{
                    props.artist.displayName
                }</Card.Text>
                <Card.Text>
                    <Card.Link href={
                        props.artist.uri
                    }>official site</Card.Link>
                </Card.Text>
                <Card.Text>
                <Card.Link><Link to={"/artists/" + props.artist.id + "/albums"}>Albums</Link></Card.Link>
                <Card.Link><Link to={"/artists/" + props.artist.id + "/events"}>Events</Link></Card.Link>
                </Card.Text>
                {props.user !== null 
                    ? <SubscribeButton artists={props.artists} id={props.artist.id} />
                    : <div>you are not logged</div>}
                {/* <Button variant="outline-primary">Subscribe</Button> */}
            </Card.Body>
        </Card>
    )
}

export default Artist;
