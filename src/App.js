import React from "react";
import './App.css';
import Header from './components/Header/header'
import Nav from "./components/Nav/navbar";
import Profile from "./components/Profile/profile";
import {Routes,  Route} from "react-router-dom";
import Musics from "./components/Musics/musics";
import Settings from "./components/Settings/settings";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import UsersContainer from "./components/Users/usersContainer";

const App = (props) => {
    return (
        <div className={'app_wrapper'}>
            <Header />
            <Nav state={props.state}/>
            <div className={'app_wrapper-content'}>
                <Routes>
                    <Route path="/profile" element = {<Profile/>}/>
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
