import axios from "axios";

//Configuraciones base
const apiClient = axios.create({
    baseURL: 'http://localhost:2880',
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

