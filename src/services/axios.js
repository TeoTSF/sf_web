import axios from "axios";
import authService from "./authServices";

const BASE_URL = "https://clinicvision-production.up.railway.app/api/v1"
const BASE_URL_LOCAL = import.meta.env.VITE_LOCAL_API_URL 

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization : "Bearer " + authService.getCurrentUser()}
})
    axiosInstance.interceptors.request.use((config) => {
        return config;
    });

    axiosInstance.interceptors.response.use((response) => {
        return response;
    })
export default axiosInstance;