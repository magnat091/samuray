import React from 'react';
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    posts: [
        {id: '1', message: 'Hi', likescount: "12", img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
        {id: '2', message: 'Het, how are you?',likescount: "13", img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
    ],
    profile: null,
    newPostText: "it-kamasutra.com",
    status: "",
    editMode:false,
}


const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "5",
                message: action.post,
                likescount: "5",
                img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg',
            };

            return {
            ...state,
            posts: [ ...state.posts, newPost ],
            };
        case SET_USER_PROFILE:
        return {
            ...state,
            profile : action.profile,
        };
        case SET_USER_STATUS:
        return {
            ...state,
            status: action.status,
        };

        default:
            return state
    }
}


export const getUserProfile = (userId) =>{
    return (dispatch) => {
        if(!userId) {
            userId = 2;
        }
        profileAPI.getProfileUsers(userId).then(data =>{
            dispatch( setUserProfileAC(data))
        })
    }
}
export const getUserStatus = (userId) => (dispatch) =>{
    if(!userId) {
        userId = 2;
    }
    profileAPI.getStatus(userId).then(response =>{
        dispatch( setUserStatusAC(response.data))
    })
}
export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status).then(response =>{
        if (response.data.resultCode === 0){
        dispatch( setUserStatusAC(status))
        }
    })
}


export const addPostAC = (post) =>({type: ADD_POST, post})
export const setUserProfileAC = (profile) =>({type: SET_USER_PROFILE, profile})
export const setUserStatusAC = (status) =>({type: SET_USER_STATUS, status})
export default profileReducer
