import axios from 'axios';

const environment = process.env.NODE_ENV;
const baseUrl = environment === 'production' ? process.env.REACT_APP_API_PROD_URL : process.env.REACT_APP_API_DEV_URL;

const instance = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        Accept: "application/json",
        timeout : 1000,
    }, 
});

export default instance;