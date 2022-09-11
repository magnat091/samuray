import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleFollowingProgress, requestUsers,
} from '../../redux/users-reducer';
import Users from './users';
import Preloader from "../Common/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage,this.props.pageSize )
    }
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber,this.props.pageSize )
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {follow, unFollow, setCurrentPage,
            toggleFollowingProgress, requestUsers}),
    withAuthRedirect)(UsersContainer)
