import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';
import Recorder from '../Recorder/Recorder';
import {Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Artists from '../Artists/Artists';
import MyEvents from '../Events/MyEvents';
import MyArtists from '../Artists/MyArtists';
import Cities from '../Cities/Cities';
import Login from '../Login/Login';
import Register from '../Login/Register';
import Tracks from '../Tracks/Tracks';
import Albums from '../Albums/Albums';
import TracksSearch from '../Tracks/TracksSearch';
import ArtistEvents from '../Events/ArtistEvents';
import CityEvents from '../Events/CityEvents';
import ArtistAndCities from '../ArtistAndCities/ArtistAndCities';

const Layout = (props) => {

    return (
        <BrowserRouter>
            <Container>
                <Header/>
                <Row>
                    <Col xs={4}>
                        <Navigation/>
                    </Col>
                    <Col bg="light" xs={4}>
                        <Routes>
                            <Route path="/profile"
                                element={<Profile/>}/>
                            <Route path="/myEvents"
                                element={<MyEvents/>}/>
                            <Route path="/subscribes"
                                element={<MyArtists/>}/>
                            <Route path="/events"
                                element={<Profile/>}/>
                            <Route path="/artists"
                                element={<Artists/>}/>
                            <Route path="/artists/:id/albums"
                                element={<Albums/>}/>
                            <Route path="/artists/:id/events"
                                element={<ArtistEvents/>}/>
                            <Route path="/cities/:id/events"
                                element={<CityEvents/>}/>
                            <Route path="/artists/:artistId/albums/:albumId/tracks"
                                element={<Tracks/>}/>
                            <Route path="/cities"
                                element={<Cities/>}/>
                            <Route path="/artistAndCities"
                                element={<ArtistAndCities/>}/>
                            <Route path="/tracks"
                                element={<TracksSearch/>}/>
                            <Route path="/recognize"
                                element={<Recorder/>}/>
                            <Route path="/login"
                                element={<Login/>}/>
                            <Route path="/register"
                                element={<Register/>}/>
                        </Routes>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default Layout;
