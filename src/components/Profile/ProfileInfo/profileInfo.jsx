import React from "react";
import p from './profileInfo.module.css';
import Preloader from "../../Common/preloader";

const ProfileInfo = (props) =>{
    if (!props.profile){
        return <Preloader/>
    }
    return(
        <div>
            <div className={p.content}>
                <img src="https://img4.goodfon.ru/wallpaper/nbig/1/7c/kartinka-loshadi-liubov-serdechki.jpg" alt=""/>
            </div>
            <div className={p.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo

