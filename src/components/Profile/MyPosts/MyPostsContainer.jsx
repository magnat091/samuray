import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default DialogsContainer;
