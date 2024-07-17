import axios from "axios";

// Configuraciones base
const apiClient = axios.create({
    baseURL: 'http://localhost:2880', // Asegúrate de que esta URL es correcta y el servidor está corriendo en este puerto
    timeout: 5000
});

// Interceptor para inyectar token si está logeado
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

export const loginRequest = async (user) => {
    try {
        const response = await apiClient.post('/user/login', user);
        return response.data;
    } catch (err) {
        return {
            error: true,
            message: err.response?.data?.message || 'Error al intentar logearse'
        };
    }
};
