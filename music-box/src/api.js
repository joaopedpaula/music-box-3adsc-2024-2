import axios from "axios";

const api = axios.create(
    {
        // usando URL como variável de ambiente
        baseURL: process.env.REACT_APP_API_URL 
    }
);

export default api;