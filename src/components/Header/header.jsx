import React from "react";
import h from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={h.header}>
            <img src="https://logoza.ru/img/rock.png" alt=""/>

            <div className={h.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
