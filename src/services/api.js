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

export const addJobSeekerRequest = async (jobSeeker) => {
    try {
        return await apiClient.post('/save', jobSeeker, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    } catch (err) {
        return {
            error: true,
            err,
        };
    }
}

export const getJobSeekersRequest = async (jobSeeker) => {
    try {
        const response = await apiClient.get('/get', jobSeeker);
        return response.data.jobSeeker;
    } catch (err) {
        return {
            error: true,
            err,
        };
    }
}

export const deleteJobSeekerRequest = async (jobSeekerId) => {
    try {
        const response = await apiClient.delete(`/delete/${jobSeekerId}`);
        return response.data;
    } catch (err) {
        return {
            error: true,
            err,
        };
    }
};


export const workOffertPost = async (data) => {
    try {
        return await apiClient.post('/workOffer/saveWorkOffer', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const getWorkOffers = async () => {
    try {
        const response = await apiClient.get('/getWorkOffers');
        return response.data || [];
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const getWorkOfferById = async (userId) => {
    try {
        const response = await apiClient.get(`/workOffer/getWorkOfferById/${userId}`);
        return response.data || [];
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};


export const updateWorkOffer = async (id, data) => {
    try {
        const response = await apiClient.put(`/workOffer/updateWorkOffer/${id}`, data);
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const deleteWorkOffer = async (id) => {
    try {
        const response = await apiClient.delete(`/workOffer/deleteWorkOffer/${id}`);
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const getAllWorkOffers = async () => {
    try {
        const response = await apiClient.get('/workOffer/getWorkOffers');
        return response.data || [];
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const applyForWorkOffer = async (data) => {
    try {
        const response = await apiClient.post('/workOffer/applyForWorkOffer', data);
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
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
