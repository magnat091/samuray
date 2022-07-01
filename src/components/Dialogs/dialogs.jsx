import React from "react";
import d from './dialogs.module.css'
import DialogItem from "./DialogsItem/dialogsItem";
import Message from "./Message/message";




const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map( (dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)

    let messagesElements = props.messagesData.map((messageEl) => <Message message={messageEl.message} key={messageEl.id}/>)

    let newMessageElement = React.createRef();

    let onaddMessage = () => {
        props.addMessage();
        newMessageElement.current.value='';
    }

    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        props.messageChange(messageText);
    }

    return(
        <div className={d.dialogs}>
            <div className={d.dialogsitems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} defaultValue={props.newMesssageText}/>
                </div>
                <div>
                    <button onClick={ onaddMessage }>Отправить сообщение</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
