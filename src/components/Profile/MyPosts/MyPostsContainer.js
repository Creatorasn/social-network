import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer.js";
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();
            
            let onAddPost = () => {
                store.dispatch( addPostActionCreator() );
            }

            let onPostChange = (text) => {
                store.dispatch( updateNewPostTextActionCreator(text) );
            }

            return <MyPosts addPost={onAddPost} updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />;
        }

    }
    </StoreContext.Consumer>
}

export default MyPostsContainer;