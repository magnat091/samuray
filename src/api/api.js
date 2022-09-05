import axios from "axios";
import {login} from "../redux/auth-reducer";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY":"c297723f-9c92-4c71-985d-5225206ca06c"
    },
})

export const usersAPI = {
    getUsers(currentPage= 1,pageSize= 10 ) {
        return instance.get(`users?page=${currentPage}&count = ${pageSize}`).then(response => {
            return response.data
        });
    },
    getStatusAuth () {
        return instance.get(`auth/me/`).then(response => {
            return response.data
        });
    },
    deleteStatusSubs(id) {
        return instance.delete(`follow/${id}`, {}).then(response => {
            return response.data
        });
    },
    postStatusSubs (id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        });
    },
    login (email, password, rememberMe = false) {
        return instance.post(`/auth/login` , {email, password, rememberMe}).then(response => {
            return response.data
        });
    },
    logout () {
        return instance.delete(`/auth/login` ).then(response => {
            return response.data
        });
    }
}

export const profileAPI = {
    getProfileUsers(userId){
        return instance.get(`profile/`+ userId).then(response => {
            return response.data
        });
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status:status})
    }
}

