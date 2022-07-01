import React from 'react';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store={
    _state : {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi', likescount: "12", img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
                {id: '2', message: 'Het, how are you?',likescount: "13", img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
            ],

            newPostText: "it-kamasutra.com",
        },
        dialogsPage: {
            dialogsData: [
                {id: '1', name: 'Starik',},
                {id: '2', name: 'Aslan',},
                {id: '3', name: 'Maret',},
                {id: '4', name: 'Avtomat',},
                {id: '5', name: 'Insert',},
                {id: '6', name: 'Islam',},
            ],
            messagesData: [
                {id: '1', message: 'Hi',},
                {id: '2', message: 'Het, how are you?',},
                {id: '3', message: 'Yo',},
                {id: '4', message: 'Yo',},
                {id: '5', message: 'Yo',},
                {id: '6', message: 'You',},
            ],
            newMessageText: "",
        },
        sidebarPage:{
            sidebarData:[
                {id: '1', adress: '/profile', name: "Profile",},
                {id: '2', adress: '/dialogs', name: "Messages",},
                {id: '3', adress: "/musics", name: "Music",},
                {id: '4', adress: "/settings", name: "Settings",},
            ],
        },
    },
    _callSubscriber(){
        console.log('State change')
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state)
    },
}

window.store=store;

export default store;
