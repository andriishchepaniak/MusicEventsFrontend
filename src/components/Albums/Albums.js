import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {setAlbumsThunk} from "../../redux/reducers/albumsReducer";
import Album from "./Album";

const Albums = (props) => {
    var albums = useSelector(state => state.albumsPage.albums);
    var dispatch = useDispatch();
    const {id} = useParams();
    const params = useParams();
    console.log(params);
    useEffect(() => {
        dispatch(setAlbumsThunk(id));
    }, []);
    console.log(albums);
    return albums.length === 0 
        ? (<div style={{height: 500}} className="d-flex align-items-center justify-content-center">No albums</div>) 
        : (albums.map(album => <Album album={album}/>))
}

export default Albums;
