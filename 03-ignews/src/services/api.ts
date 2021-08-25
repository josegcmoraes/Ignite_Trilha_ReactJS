import axios from 'axios';

export const api = axios.create({
    // baseURL: "/api" // mesmo endereço, apenas muda essa parte

    // baseURL: "http:localhost:3000/api"
    baseURL: "/api"
});