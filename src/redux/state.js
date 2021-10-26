let rerenderEntireTree = () => {}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'scout post Squirrel', likesCount: 0},
            {id: 2, message: 'scout post Fox', likesCount: 10},
            {id: 3, message: 'scout post Tit', likesCount: 20}
        ],
        newPostText: 'scouting'
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Squirrel'},
            {id: 2, name: 'Fox'},
            {id: 3, name: 'Tit'},
            {id: 4, name: 'Wolf'},
            {id: 5, name: 'Phoenix'}
        ],
        messages: [
            {id: 1, message: 'When did the first scouts appear?'},
            {id: 2, message: 'The scout movement originated a long time ago and still exists.'},
            {id: 3, message: 'It was his basic organizational principles that were adopted by the pioneer organization.'}
        ],
        newMessageText: 'Hello'
    }
  }

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText =(newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
}

export default state;