import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:2656/',
    timeout: 1000
})
apiClient.interceptors.request.use(
    (config) => {
        //extraemos el token de los headers
        const userDetails = localStorage.getItem('token')
        if (userDetails) {
            const token = JSON.parse(userDetails)
            config.headers.Authorization = `${token}`
            console.log(token)
        }
        return config
    },
    (err) => Promise.reject(err)
)