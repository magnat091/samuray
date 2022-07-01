import React from "react";
import s from "../Users/users.module.css";

const Users = (props) =>{
    if (props.users.length === 0){
        props.setUsers( [
            {id: '1', followed: false, name: 'Dmitriy K.', location:{city: 'Minsk', country: 'Belarus' }, status: 'I am a boss', img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
            {id: '2', followed: true, name: 'Svetlana D.', location:{city: 'Moscow', country: 'Russia' }, status: '', img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
            {id: '3',followed: false, name: 'Sergei S.', location:{city: 'Kiev', country: 'Ukraine' }, status: '', img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
            {id: '4', followed: true, name: 'Uruskhan G.', location:{city: 'Kiev', country: 'Ukraine' }, status: '', img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
            ]
        )
    }

    return <div>
        {
            props.users.map( (u,i) => <div key={i}>
                <span>
                    <div>
                        <img src={u.img} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.follow(u.id) }}>Follow</button>
                            : <button onClick={() => {props.unfollow(u.id) }} > Unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
