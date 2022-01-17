import axios from "axios";


export const SubscribesApi = {
    subscribeToArtist: (artistId, token) => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        return axios.post(`https://localhost:44375/api/Subscribes/artistsubscribe?artistApiId=${artistId}`, {}, config);
    },

    unSubscribeFromArtist: (artistId, token) => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        return axios.post(`https://localhost:44375/api/Subscribes/artistunsubscribe?artistApiId=${artistId}`, {}, config);
    },

    subscribeToCity: (cityId, token) => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        return axios.post(`https://localhost:44375/api/Subscribes/citysubscribe?cityApiId=${cityId}`, {}, config);
    },

    unSubscribeFromCity: (cityId, token) => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        return axios.post(`https://localhost:44375/api/Subscribes/cityunsubscribe?cityApiId=${cityId}`, {}, config);
    },

    subscribeToArtistAndCity: (artistId, cityId, token) => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        return axios.post(`https://localhost:44375/api/Subscribes/artistandcitysubscribe?artistApiId=${artistId}&cityApiId=${cityId}`, {}, config);
    },

    unSubscribeFromArtistAndCity: (artistId, cityId, token) => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        return axios.post(`https://localhost:44375/api/Subscribes/artistandcityunsubscribe?artistApiId=${artistId}&cityApiId=${cityId}`, {}, config);
    }
}
