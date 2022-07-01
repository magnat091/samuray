import React from "react";
import d from './message.module.css'



const Message = (props) => {
    return(
        <div>
            <div>
                <div className={d.dialog}>{props.message}</div>
            </div>
        </div>
    )
}

export default Message;
