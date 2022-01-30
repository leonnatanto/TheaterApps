import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        // Authorization: 
        //     'Bearer a7d50ff6d6f3c1a07bbe5e065dd8fd50'
    }
});