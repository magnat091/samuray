import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';


const MyPosts = (props) =>{
    let postsElements = props.posts.map((post) => <Post comment={post.message} key={post.id} like={post.likescount} img={post.img}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        newPostElement.current.value='';
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return(
        <div className={s.myposts}>
            <div>
                <h3>
                    My posts
                </h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} defaultValue={props.newPostText}/>
                    </div>
                    <div>
                        <button className={'button'} onClick={ onAddPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        </div>
    )
}

export default MyPosts;
