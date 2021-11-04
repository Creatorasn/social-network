import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onNewMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return < Dialogs addMessage={onNewMessage} 
                    updateNewMessageText={onMessageChange} 
                    dialogs={state.dialogsPage.dialogs} 
                    messages={state.dialogsPage.messages} 
                    newMessageText={state.dialogsPage.newMessageText} />
}

export default DialogsContainer;