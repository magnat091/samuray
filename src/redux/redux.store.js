import React from "react";
import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;
