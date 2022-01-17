import axios from "axios";


export const TracksApi = {
    getTracksByName: (trackName) => {
        return axios.get(`https://localhost:44375/api/Tracks/${trackName}`);
    },

    getTracksByAlbumId: (albumId) => {
        return axios.get(`https://localhost:44375/api/Albums/${albumId}/tracks`);
    }
}