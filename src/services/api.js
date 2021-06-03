import axios from 'axios';

export const key = '7729e5f9b68e7ef5fdb12ca2f0a0ea4fa1a9dc81';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Content-type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
});
export default api;