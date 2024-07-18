import axios from "axios";

// Configuraciones base
const apiClient = axios.create({
    baseURL: 'http://localhost:2880',
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

// Funciones para profesiones
export const fetchProfessions = async () => {
    try {
        const response = await apiClient.get('/profession/getProfession');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const saveProfession = async (profession) => {
    try {
        const response = await apiClient.post('/profession/saveProfession', profession);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUserProfession = async (userId, professionId) => {
    try {
        const response = await apiClient.put(`/user/${userId}`, { profession: professionId });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const saveEmployer = async (employer) => {
    try {
        return await apiClient.post('/employer/saveEmployer', employer); // Ajusta la URL según la configuración de tu API
    } catch (error) {
        return {
            error: true,
            error
        };
    }
};
