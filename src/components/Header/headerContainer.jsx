import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        usersAPI.getStatusAuth().then(data => {
                if (data.resultCode === 0){
                    let {id, email, login} = data.data;
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


