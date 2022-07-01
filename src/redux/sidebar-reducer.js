import React from 'react';
import state from "./store";

let initialState={
    sidebarData:[
        {id: '1', adress: '/profile', name: "Profile",},
        {id: '2', adress: '/dialogs', name: "Messages",},
        {id: '3', adress: "/musics", name: "Music",},
        {id: '4', adress: "/settings", name: "Settings",},
        {id: '5', adress: "/users", name: "Find users",},
    ],
};

const sidebarReducer = (state=initialState, action) => {
    return state;
}

export default sidebarReducer;
