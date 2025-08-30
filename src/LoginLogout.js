import api from "./api";


export async function login(credentials){
    try{
        const res = await api.post('token/', credentials)
        localStorage.setItem('access_token', res.data.access)
        localStorage.setItem('refresh_token', res.data.refresh)
    }catch(error){
        console.error(error)
        return
    }window.location.href = '/'
}

export function Logout(){
    try{
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    }catch(error){console.error(error); return}
    window.location.href = '/'
    
}

export const ACCESS_TOKEN = localStorage.getItem('access_token')