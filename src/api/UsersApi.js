import axios from "axios";


export const UsersApi = {
    getUser: (id) => {
        return axios.get(`https://localhost:44375/api/users/${id}`);
    },
    
    getUserEvents: (id) => {
        return axios.get(`https://localhost:44375/api/users/${id}/events`);
    },

    getUserArtists: (id) => {
        return axios.get(`https://localhost:44375/api/users/${id}/artists`);
    },

    getUserCities: (id) => {
        return axios.get(`https://localhost:44375/api/users/${id}/cities`);
    }
}
