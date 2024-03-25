import axios from "axios";

export default axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    timeout: 1000
})

export const API_TASKS = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 1000
})
