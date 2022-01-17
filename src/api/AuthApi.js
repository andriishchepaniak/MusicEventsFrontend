import axios from "axios";


export const AuthApi = {
    login: (email, password) => {
        var body ={
            email: email,
            password: password
        }
        return axios.post("https://localhost:44375/api/account/login", body);
    },

    register: (user) => {
        return axios.post("https://localhost:44375/api/account/register", user);
    }
}