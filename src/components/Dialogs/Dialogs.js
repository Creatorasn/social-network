import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} />);
    
    let newMessageElement = React.createRef();

    let newMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={s.addMassege}>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={newMessage}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;