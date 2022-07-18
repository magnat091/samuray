import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsersTotalCount,
    setUsers,
    unFollow,
    setIsFetching, toggleFollowingProgress
} from '../../redux/users-reducer';
import Users from './users';
import Preloader from "../Common/preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize ).then(data =>{
            this.props.setIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize ).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items)
            })
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
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching, toggleFollowingProgress})(UsersContainer)


