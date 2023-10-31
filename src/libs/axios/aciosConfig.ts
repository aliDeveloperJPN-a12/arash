import axios, { AxiosInstance } from 'axios';
import cookies from 'js-cookie';

const getToken = () => {
    return cookies.get('token');
};

const axiosConfig = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ADDRESS,
    timeout: 10000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

axiosConfig.interceptors.request.use(
    (config: AxiosInstance) => {
        const token = getToken();
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token ? token : ''}`,
        };
        return config;
    },
    (error: any) => {
        const token = getToken();
        if (token) {
            return Promise.reject(error);
        } else {
            cookies.remove('token');
            cookies.remove('refreshToken');
            localStorage.removeItem('user');
            window.location.replace('/login');
        }
    },
);

export default axiosConfig;
