import React from 'react';
import profileReducer, {addPostAC, deletePostAC} from "./redux/profile-reducer";


it('new post should be lenght', () => {
    let action = addPostAC("it-kamasutra");
    let state = {
        posts: [
            {id: '1', message: 'Hi', likescount: "12", img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
            {id: '2', message: 'Het, how are you?',likescount: "13", img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
        ]
    }
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3);
})


it('new post should be added corect', () => {
    let action = addPostAC("it-kamasutra");
    let state = {
        posts: [
            {id: '1', message: 'Hi', likescount: "12", img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
            {id: '2', message: 'Het, how are you?',likescount: "13", img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
        ]
    }
    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe("it-kamasutra")
})


it('after deleting lenght of messages should be decrement', () => {
    let action = deletePostAC(1);
    let state = {
        posts: [
            {id: '1', message: 'Hi', likescount: "12", img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
            {id: '2', message: 'Het, how are you?',likescount: "13", img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
        ]
    }
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})
it('after deleting lenght shouldt be decrement if id is imcorrect', () => {
    let action = deletePostAC(1000);
    let state = {
        posts: [
            {id: '1', message: 'Hi', likescount: "12", img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'},
            {id: '2', message: 'Het, how are you?',likescount: "13", img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
        ]
    }
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})
