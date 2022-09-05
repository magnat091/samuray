import React from "react";
import {
    sendMessage,
} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return{
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.authUsersPage.isAuth,
    }
}



export default compose(
    connect(mapStateToProps, {sendMessage}),
        withAuthRedirect)(Dialogs)
