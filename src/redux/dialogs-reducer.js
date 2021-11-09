const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = { message: state.newMessageText };
            let stateCopy = {...state};
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;