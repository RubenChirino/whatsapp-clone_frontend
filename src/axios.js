import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://boiling-cliffs-79172.herokuapp.com'
});

//http://localhost:9000     

export default instance;
