import axios from 'axios'; 

export default axios.create(
    {
        baseURL: 'http://localhost:3009',
        timeout: 5000,
        withCredentials: true
    })