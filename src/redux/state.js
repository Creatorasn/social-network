const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
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
      },
    _callSubscriber() {},
    
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            this._addPost();
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        } else if(action.type === 'ADD-MESSAGE') {
            this._addMessage();
        } else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._updateNewMessageText(action.newText);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator =(text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store;
window.store = store;