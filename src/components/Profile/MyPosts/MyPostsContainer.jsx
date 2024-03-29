import React from "react";
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
    }
}


const PostContainer = connect(mapStateToProps, {addPostAC})(MyPosts)

export default PostContainer;
