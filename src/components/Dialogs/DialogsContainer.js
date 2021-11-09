import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

// const DialogsContainer = () => {

//     return <StoreContext.Consumer>
//         { store => {
//             let state = store.getState();

//             let onNewMessage = () => {
//                 store.dispatch(addMessageActionCreator());
//             }

//             let onMessageChange = (text) => {
//                 store.dispatch(updateNewMessageTextActionCreator(text));
//             }
            
//             return < Dialogs addMessage={onNewMessage} 
//             updateNewMessageText={onMessageChange} 
//             dialogs={state.dialogsPage.dialogs} 
//             messages={state.dialogsPage.messages} 
//             newMessageText={state.dialogsPage.newMessageText} />
//         }
//     }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;