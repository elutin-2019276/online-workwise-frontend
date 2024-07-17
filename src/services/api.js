import axios from "axios";

//Configuraciones base
const apiClient = axios.create({
    baseURL: 'http://localhost:2880/JobSeeker',
    timeout: 5000
})

//Interceptor para inyectar token si está logeado
apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) config.headers.Authorization = token
        return config
    },
    err => Promise.reject(err)
)

export const loginRequest = async (user) => {
    try {
        return await apiClient.post('/user/login', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

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
        const response = await apiClient.post('/workOffer/applyForWorkOffer',  data);
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};
