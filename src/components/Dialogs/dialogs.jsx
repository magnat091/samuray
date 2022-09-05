import React from "react";
import d from './dialogs.module.css'
import DialogItem from "./DialogsItem/dialogsItem";
import Message from "./Message/message";
import {Navigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {MessageFormSchema, requiredField} from "../../Utils/validators/validators";
import {ErrorMessageField, Textarea} from "../Common/FormsControl/formsControls";



const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map( (dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)

    let messagesElements = props.messagesData.map((messageEl) => <Message message={messageEl.message} key={messageEl.id}/>)




    if (!props.isAuth) return <Navigate to={"/login"} />

    return(
        <div className={d.dialogs}>
            <div className={d.dialogsitems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm sendMessage={props.sendMessage} />
            </div>

        </div>
    )
}




const AddMessageForm = (props) => (

    <div>
        <Formik

            initialValues={{ message: '' }}
            validate={requiredField}
            onSubmit={(values,{resetForm}) => {
                let addNewMessage = (values) =>{
                    props.sendMessage(values)
                }
                addNewMessage(values.message)
                values.message = "";
               resetForm({values})
            }}
            validationSchema={MessageFormSchema}

        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field
                            component={Textarea}
                            name={'message'}
                            type={'text'}
                            placeholder={'Ваше сообщение'} />
                        <ErrorMessage  name="message" component={ErrorMessageField} />
                    </div>
                        <button type="submit" disabled={isSubmitting}>
                            Отправить
                        </button>
                </Form>
            )}
        </Formik>
    </div>
);


export default Dialogs;
