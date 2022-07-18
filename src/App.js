import React from "react";
import './App.css';
import HeaderContainer from './components/Header/headerContainer'
import Nav from "./components/Nav/navbar";
import {Routes,  Route} from "react-router-dom";
import Musics from "./components/Musics/musics";
import Settings from "./components/Settings/settings";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import UsersContainer from "./components/Users/usersContainer";
import ProfileContainer from "./components/Profile/profileContainer";

const App = (props) => {
    return (
        <div className={'app_wrapper'}>
            <HeaderContainer />
            <Nav state={props.state}/>
            <div className={'app_wrapper-content'}>
                <Routes>
                    <Route path="/profile/" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId" element = {<ProfileContainer/>}/>
                    <Route exact path="/dialogs" element = {<DialogsContainer/>}/>
                    <Route path="/musics" element = {<Musics />}/>
                    <Route path="/settings" element = {<Settings />}/>
                    <Route path="/users" element = {<UsersContainer />}/>
                </Routes>
            </div>
        </div>
    );
}



export default App;
