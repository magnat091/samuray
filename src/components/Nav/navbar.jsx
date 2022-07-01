import React from "react";
import s from './navbar.module.css';
import NavItem from "./NavItem/navitem";


const Nav = (props) => {
    let state = props.state.sidebarPage;
    let sidebarElements = state.sidebarData.map( (sidebarEl) => <NavItem name={sidebarEl.name} key={sidebarEl.id} adress={sidebarEl.adress}/>)
    return(
        <nav className={s.nav}>
            {sidebarElements}
        </nav>
    )

}

export default Nav;
