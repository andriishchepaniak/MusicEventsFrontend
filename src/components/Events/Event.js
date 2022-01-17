import React from 'react';
import {Card, Button, NavLink} from 'react-bootstrap';

const Event = (props) => {
    
    return (
        <Card className="mt-3">
            <Card.Body>
                <Card.Text> Id: {
                    props.event.id
                }</Card.Text>
                <Card.Text> Name: {
                    props.event.displayName
                }</Card.Text>
                <Card.Text> Type: {
                    props.event.type
                }</Card.Text>
                <Card.Text> Date: {
                    props.event.start.date
                }</Card.Text>
                <Card.Text> Artists: {
                    props.event.performance.map(a => {
                        return a.displayName + " ";
                    })
                }</Card.Text>
                <Card.Text>
                    <Card.Link href={
                        props.event.uri
                    }>official site</Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Event;
