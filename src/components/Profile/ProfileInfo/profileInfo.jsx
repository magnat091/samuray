import React from "react";
import p from './profileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div>
            <div className={p.content}>
                <img src="https://img4.goodfon.ru/wallpaper/nbig/1/7c/kartinka-loshadi-liubov-serdechki.jpg" alt=""/>
            </div>
            <div className={p.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo
