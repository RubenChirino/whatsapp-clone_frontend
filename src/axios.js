import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9000'
});

//https://mongo-realtime.herokuapp.com     

export default instance;