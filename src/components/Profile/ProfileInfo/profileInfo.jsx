import React from "react";
import p from './profileInfo.module.css';
import Preloader from "../../Common/preloader";
import userPhoto from "../../../assets/images/219983.png";
import ProfileStatusWithHooks from "./profileStatusWithHooks";

const ProfileInfo = (props) =>{
    if (!props.profile){
        return <Preloader/>
    }
    return(
        <div>
           {/*<div className={p.content}>*/}
           {/*     <img src="https://img4.goodfon.ru/wallpaper/nbig/1/7c/kartinka-loshadi-liubov-serdechki.jpg" alt=""/>*/}
           {/* </div>*/}
            <div className={p.descriptionBlock}>
                <img className={p.avatar} src={props.profile.photos.large!=null ? props.profile.photos.large: userPhoto}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                <span>Имя:{props.profile.fullName}</span>
                <span>Обо мне:{props.profile.aboutMe}</span>
            </div>
        </div>
    )
}

export default ProfileInfo

