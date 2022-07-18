import React from "react";
import Profile from "./profile";
import axios from "axios";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import { useParams } from 'react-router-dom';
import {usersAPI} from "../../api/api";

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        usersAPI.getProfileUsers(userId).then(data =>{
            this.props.setUserProfileAC(data)
        })
    }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent);
