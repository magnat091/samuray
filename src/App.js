import React from "react";
import './App.css';
import HeaderContainer from './components/Header/headerContainer'
import Nav from "./components/Nav/navbar";
import {Routes, Route, useParams} from "react-router-dom";
import Musics from "./components/Musics/musics";
import Settings from "./components/Settings/settings";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import UsersContainer from "./components/Users/usersContainer";
import ProfileContainer from "./components/Profile/profileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/preloader";





class App extends React.Component {
    componentDidMount() {
            this.props.initializeApp();
        }render() {
         if (!this.props.initialized){
             return <Preloader/>
         } return (
            <div className={'app_wrapper'}>
                <HeaderContainer/>
                <Nav state={this.props.state}/>
                <div className={'app_wrapper-content'}>
                    <Routes>
                        <Route path="/profile/" element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route exact path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/musics" element={<Musics/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}


const mapStatetoProps = (state) =>({
    initialized:state.appPage.initialized
})
export default compose (connect(mapStatetoProps, {initializeApp}) (App));
