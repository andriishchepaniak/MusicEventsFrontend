import React from 'react';
import {Card} from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';

const TrackDetail = (props) => {
    var name = "";
    for (let i = 0; i < props.track.spotify.artists.length; i++) {
        if (i === props.track.spotify.artists.length - 1) {
            name += props.track.spotify.artists[i].name;
            break;
        }
        name += props.track.spotify.artists[i].name + " & ";
    }
    console.log(props.track.spotify.preview_url)
    return (
        <Card className="mb-5" bg="light">
            <Card.Body>
                <Card.Text >Name: {name}</Card.Text>
                <Card.Text>Album: {
                    props.track.album
                }</Card.Text>
                <Card.Text>Artist: {
                    props.track.artist
                }</Card.Text>
                <Card.Text>Release_date: {
                    props.track.release_date
                }</Card.Text>
                <Card.Img src={
                    props.track.spotify.album.images[1].url
                }></Card.Img>
            </Card.Body>
            <Card.Text className="m-2">
                <Card bg="info">
                    <Card.Body>
                        <Card.Text className="mt-2">
                            <ReactAudioPlayer src={
                                    props.track.spotify.preview_url
                                }
                                controls/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card.Text>

        </Card>
    )
}

export default TrackDetail;
