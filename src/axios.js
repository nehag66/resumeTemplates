import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://resumetemplates-8898.firebaseio.com/'
});

export default instance;