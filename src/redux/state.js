import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        },
        
        sidebar: {}
      },
    _callSubscriber() {},
    
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;