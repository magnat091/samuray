import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {authUsers, logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component{

    render() {
        return(
            <Header {...this.props} logout={this.props.logout} />

        )
    }
}

let mapStateToProps = (state) => ({
    login: state.authUsersPage.login,
    isAuth: state.authUsersPage.isAuth,

})


export default connect(mapStateToProps, {authUsers, logout}) (HeaderContainer);


