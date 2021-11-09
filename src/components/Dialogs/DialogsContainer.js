import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            let state = store.getState();

            let onNewMessage = () => {
                store.dispatch(addMessageActionCreator());
            }

            let onMessageChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            }
            
            return < Dialogs addMessage={onNewMessage} 
            updateNewMessageText={onMessageChange} 
            dialogs={state.dialogsPage.dialogs} 
            messages={state.dialogsPage.messages} 
            newMessageText={state.dialogsPage.newMessageText} />
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;