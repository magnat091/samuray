import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMesssageText: state.dialogsPage.newMesssageText,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        messageChange: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText));
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
