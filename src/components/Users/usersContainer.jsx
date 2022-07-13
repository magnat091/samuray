import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsersTotalCount,
    setUsers,
    unFollow,
    setIsFetching
} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './users';
import preloader from '../../assets/images/Gear-0.2s-200px.svg'
import Preloader from "../Common/preloader";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count = ${this.props.pageSize}`).then(responce =>{
            this.props.setIsFetching(false);
            this.props.setUsers(responce.data.items)
            this.props.setUsersTotalCount(responce.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${this.props.pageSize}`)
            .then(responce => {
                this.props.setIsFetching(false);
                this.props.setUsers(responce.data.items)
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
    }
}

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching})(UsersContainer)


