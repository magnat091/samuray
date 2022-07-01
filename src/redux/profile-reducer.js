import React from 'react';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: '1', message: 'Hi', likescount: "12", img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
        {id: '2', message: 'Het, how are you?',likescount: "13", img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
    ],

    newPostText: "it-kamasutra.com",
}


const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "5",
                message: state.newPostText,
                likescount: "5",
                img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg',
            };

            return {
            ...state,
            newPostText: '',
            posts: [ ...state.posts, newPost ],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText : action.newText,
            };
        default:
            return state
    }
}

export default profileReducer

export const addPostActionCreator = () =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})
