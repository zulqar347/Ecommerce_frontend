import axios from 'axios'
import { ACCESS_TOKEN } from './LoginLogout'



const api = axios.create({
    baseURL : import.meta.env.VITE_API,
    headers :{
        'Content-Type': 'application/json'
    }
})


api.interceptors.request.use((config)=>{
    if (ACCESS_TOKEN){
        config.headers.Authorization= `Bearer ${ACCESS_TOKEN}`
    }
    return config
},(error) => Promise.reject(error)
)


export default api