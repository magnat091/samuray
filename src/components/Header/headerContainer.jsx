import React from "react";
import Header from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
            withCredentials: true
        })
            .then(responce => {
                if (responce.data.resultCode === 0){
                    let {id, email, login} = responce.data.data;
                    this.props.setUserDataAC(id, email, login);
                }
            })

    }

    render() {
        return(
            <Header {...this.props} />

        )
    }
}

let mapStateToProps = (state) => ({
    login: state.authUsersPage.login,
    isAuth: state.authUsersPage.isAuth,

})


export default connect(mapStateToProps, {setUserDataAC}) (HeaderContainer);


