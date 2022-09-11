import React from 'react';
import { usersAPI} from "../api/api";


const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId:null,
    email: null,
    login: null,
    isAuth: false,
    messages: "",
    data: null,
}


const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state
    }

}

export const authUsers = () => {
    return (dispatch) => {
        return usersAPI.getStatusAuth().then(data => {
            if (data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(setUserDataAC(id, email, login, true))
            }
        })
    }
}

export const login = (email, password, rememberMe, setStatus, setSubmitting) => {
    return (dispatch) => {
        usersAPI.login(email, password, rememberMe, true).then(data => {
            if (data.resultCode === 0){
               dispatch(authUsers());
            } else {
                setStatus(data.messages) };
            setSubmitting(false);
        })
    }
}


export const logout = () => {
    return (dispatch) => {
        usersAPI.logout().then(data => {
            if (data.resultCode === 0){
                dispatch(setUserDataAC(null, null, null, false))
            }
        })
    }
}



export const setUserDataAC = (userId, email, login, isAuth) =>({type: SET_USER_DATA, payload:{userId, email, login, isAuth}})

export default authReducer
