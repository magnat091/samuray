import React from 'react';
import {usersAPI} from "../api/api";

const ADD_USERS = 'ADD-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followed:"",
    followingInProgress:[],

}


const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUserCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}



export const followSuccess = (userId) =>({type: FOLLOW, userId})
export const unFollowSuccess = (userId) =>({type: UNFOLLOW, userId});
export const setUsers = (users) =>({type: SET_USERS, users});
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsFetching = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) =>({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage,pageSize ) => {
   return (dispatch) => {
        dispatch( setIsFetching(true));
            usersAPI.getUsers(currentPage, pageSize ).then(data =>{
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
            });
        }
}

export const follow = (userid) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userid))
        usersAPI.deleteStatusSubs(userid).then(data =>{
            if (data.resultCode == 0) {
                dispatch(followSuccess(userid))
            }
        })
        dispatch(toggleFollowingProgress(false, userid))
    }
}
export const unFollow = (userid) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userid))
        usersAPI.postStatusSubs(userid).then(data =>{
            if (data.resultCode == 0) {
                dispatch(unFollowSuccess(userid))
            }
        })
        dispatch(toggleFollowingProgress(false, userid))
    }
}



export default usersReducer
