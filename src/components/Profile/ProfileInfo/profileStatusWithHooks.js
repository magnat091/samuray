import React, {useEffect, useState} from "react";



const ProfileStatusWithHooks = (props) => {

    let [editMode , setEditMode] = useState(false);
    let [status , setStatus] = useState(props.status);

    useEffect( ()=> {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deActivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return(
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateMode} >{props.status || "---------"}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onBlur={deActivateMode} autoFocus={true} onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    )
}

export default  ProfileStatusWithHooks;
