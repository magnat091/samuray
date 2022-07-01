import React from 'react';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}



const dialogsReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: "7",
                message: state.newMessageText,
            }
            return  {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage ],
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage,
            };
        default:
            return state;
    }
}

export const updateNewMessageTextActionCreator = (messageText) =>({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: messageText})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})


export default dialogsReducer
