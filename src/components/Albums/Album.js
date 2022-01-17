import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Album = (props) => {

    return (
        <Card className="mb-2" bg="light">
            <Card.Body>
                <Card.Text>Type: {
                    props.album.album_type
                }</Card.Text>
                <Card.Text>Name: {
                    props.album.name
                }</Card.Text>
                <Card.Text>Release_date: {
                    props.album.release_date
                }</Card.Text>
                <Card.Text>Total tracks: {
                    props.album.total_tracks
                }</Card.Text>
                <Card.Link>
                    <Link to={props.album.id + "/tracks"}>Tracks</Link>
                </Card.Link>
                <Card.Img src={
                    props.album.images[1].url
                }></Card.Img>
            </Card.Body>
        </Card>
    )
}

export default Album;