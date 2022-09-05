import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleFollowingProgress,
    getUsers,
} from '../../redux/users-reducer';
import Users from './users';
import Preloader from "../Common/preloader";
import {compose} from "redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../Profile/profileContainer";


class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize )
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize )
    }
    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null }
            <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unFollow}
                      followingInProgress={this.props.followingInProgress}
        />
</>
    }
}


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}



export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {follow, unFollow, setCurrentPage,
            toggleFollowingProgress, getUsers}),
    withAuthRedirect)(UsersContainer)
