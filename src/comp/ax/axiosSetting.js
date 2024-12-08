import axios from 'axios'

// const api1 = axios.create({
//     baseURL: 'http://localhost:8080/api',
//     // data: {},
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

const api = axios.create({
    baseURL: 'http://localhost:8080/api/board',
    headers: {
        'Content-Type': 'application/json'
    }
});
export default api;