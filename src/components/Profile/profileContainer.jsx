import React from "react";
import Profile from "./profile";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Navigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.getUserProfile( this.props.match.params.userId);
        this.props.getUserStatus( this.props.match.params.userId);
    }

    render() {
        return(
            <Profile {...this.props} status={this.props.status} profile={this.props.profile} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus,updateStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
