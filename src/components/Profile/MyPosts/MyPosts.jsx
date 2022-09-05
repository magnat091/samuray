import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { PostFormSchema, requiredField} from "../../../Utils/validators/validators";
import {Textarea, ErrorMessageField} from "../../Common/FormsControl/formsControls";


const MyPosts = (props) =>{
    let postsElements = props.posts.map((post) => <Post comment={post.message} key={post.id} like={post.likescount} img={post.img}/>)

    return(
        <div className={s.myposts}>
            <div>
               <AddPostForm sendPost={props.addPostAC}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        </div>
    )
}

const AddPostForm = (props) => (
    <div>
        <Formik

            initialValues={{ post: '' }}
            validate={requiredField}
            onSubmit={(values,{resetForm}) => {
                let addNewPost = (values) =>{
                    props.sendPost(values)
                }
                addNewPost(values.post)
                values.post = "";
                resetForm({values})
            }}
            validationSchema={PostFormSchema}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field
                            component={Textarea}
                            name={'post'}
                            type={'text'}
                            placeholder={'Ваше сообщение'} />
                        <ErrorMessage  name="post" component={ErrorMessageField} />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Добавить
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default MyPosts;
