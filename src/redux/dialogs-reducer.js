import React from 'react';

const SEND_MESSAGE = 'SEND-MESSAGE';


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
}



const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.message;
                return {
                    ...state,
                    messagesData: [...state.messagesData, { id: 7, message: body }],
                };


        default:
            return state;
    }
}

export const sendMessage = (message) => ({type: SEND_MESSAGE, message})


export default dialogsReducer
