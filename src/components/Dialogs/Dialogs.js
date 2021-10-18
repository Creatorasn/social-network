import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

let dialogs = [
    {id: 1, name: 'Squirrel'},
    {id: 2, name: 'Fox'},
    {id: 3, name: 'Tit'},
    {id: 4, name: 'Wolf'},
    {id: 5, name: 'Phoenix'}
]

let messages = [
    {id: 1, message: 'When did the first scouts appear?'},
    {id: 2, message: 'The scout movement originated a long time ago and still exists.'},
    {id: 3, message: 'It was his basic organizational principles that were adopted by the pioneer organization.'}
]

let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
let messagesElements = messages.map( m => <Message message={m.message} />);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;