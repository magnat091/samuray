import React from 'react';
import  {authUsers} from "./auth-reducer";


const INITIALIZED_SUCCES = 'INITIALIZED-SUCCES';


let initialState = {
    initialized:false
}


const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized:true,
            };
        default:
            return state
    }

}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCES })

export const initializeApp = () =>(dispatch) => {
    let promise = dispatch(authUsers());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}







export default appReducer
