import axios from "axios";


const axiosPrivate = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true, // REQUIRED for HTTP-only cookies
});

export default axiosPrivate;
