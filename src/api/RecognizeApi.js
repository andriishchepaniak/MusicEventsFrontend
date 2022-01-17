import axios from "axios";


export const RecognizeApi = {
    getTrack: (form) => {
        return axios({
            method: 'post',
            url: 'https://localhost:44375/api/recognize/file',
            data: form,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}