import axios from "axios";


export const ArtistsApi = {
    getArtistsByName: (artistName) => {
        return axios.get(`https://localhost:44375/api/Artists/GetArtistsByName/${artistName}`);
    }
}