import axios from "axios";

export const AlbumsApi = {
    getAlbumsByArtistId: (id) => {
        return axios.get(`https://localhost:44375/api/Albums/getBySongkickId/${id}`);
    }
}