import React from "react";
import s from "../Users/users.module.css";
import userPhoto from "../../assets/images/219983.png"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }
    return(
        <div>
            <div className={s.pages}>
                {pages.map( p => {
                    return <span className={props.currentPage === p && s.selectedPage }
                     onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {
                props.users.map( (u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !=null ? u.photos.small: userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                    usersAPI.deleteStatusSubs(u.id).then(data =>{
                                        if (data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                })
                                props.toggleFollowingProgress(false, u.id)
                            }}>Follow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                    usersAPI.postStatusSubs(u.id).then(data =>{
                                        if (data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                                props.toggleFollowingProgress(false, u.id)
                            }}>Unfollow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )

}



export default Users;
