import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map( m => <Message message={m.message} />);

    let onNewMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
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
                        <textarea onChange={onMessageChange}
                        value={props.newMessageText}
                        placeholder='Enter yor message' />
                    </div>
                    <div>
                        <button onClick={onNewMessage}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;