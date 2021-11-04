import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer.js";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    
    let onAddPost = () => {
        props.store.dispatch( addPostActionCreator() );
    }

    let onPostChange = (text) => {
        props.store.dispatch( updateNewPostTextActionCreator(text) );
    }

    return <MyPosts addPost={onAddPost} updateNewPostText={onPostChange}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />;
}

export default MyPostsContainer;