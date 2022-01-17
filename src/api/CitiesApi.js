import axios from "axios";


export const CitiesApi = {
    getCitiesByName: (cityName) => {
        return axios.get(`https://localhost:44375/api/Cities/GetCity/${cityName}`);
    }
}