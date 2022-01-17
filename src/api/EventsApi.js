import axios from "axios";


export const EventsApi = {
    getArtistsEvents: (artistId) => {
        return axios.get(`https://localhost:44375/api/Events/GetArtistsEvents/${artistId}`);
    },

    getCityEvents: (cityId) => {
        return axios.get(`https://localhost:44375/api/Events/GetMetroEvents/${cityId}`);
    }
}