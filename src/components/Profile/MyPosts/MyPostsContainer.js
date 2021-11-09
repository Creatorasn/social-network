import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer.js";
import { connect } from 'react-redux';

// const MyPostsContainer = () => {

//     return <StoreContext.Consumer>
//         {store => {
//             let state = store.getState();
            
//             let onAddPost = () => {
//                 store.dispatch( addPostActionCreator() );
//             }

//             let onPostChange = (text) => {
//                 store.dispatch( updateNewPostTextActionCreator(text) );
//             }

//             return <MyPosts addPost={onAddPost} updateNewPostText={onPostChange}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText} />;
//         }

//     }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch( addPostActionCreator() );
        },
        updateNewPostText: (text) => {
            dispatch( updateNewPostTextActionCreator(text) );
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;