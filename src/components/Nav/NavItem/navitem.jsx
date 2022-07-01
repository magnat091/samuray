import React from "react";
import s from './navitem.module.css';
import {NavLink} from "react-router-dom";


const NavItem = (props) => {
    return(
        <div className={s.navlink}>
            <NavLink to={props.adress}>{props.name}</NavLink>
        </div>
    )
}

export default NavItem;
