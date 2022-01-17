import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {Card, Button, NavLink} from 'react-bootstrap';
import './Track.css';

const Track = (props) => {

    return (
        <Card className="mt-3 mb-3">
            <Card.Body>
                <Card.Text>{
                    props.track.artists.map(a => a.name + " ")
                }</Card.Text>
                <Card.Text>{
                    props.track.name
                }</Card.Text>
                <Card.Text className="trackImg">
                    {/* <img className="pb-5 pr-3" src="https://i.scdn.co/image/ab67616d0000485186f6aed775596ade6365f23f"/> */}
                    <ReactAudioPlayer src={
                            props.track.preview_url
                        }
                        controls/>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Track;
