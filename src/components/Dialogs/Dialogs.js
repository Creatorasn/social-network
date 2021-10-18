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

let dialogsData = [
    {id: 1, name: 'Squirrel'},
    {id: 2, name: 'Fox'},
    {id: 3, name: 'Tit'},
    {id: 4, name: 'Wolf'},
    {id: 5, name: 'Phoenix'}
]

let messagesData = [
    {id: 1, message: 'When did the first scouts appear?'},
    {id: 2, message: 'The scout movement originated a long time ago and still exists.'},
    {id: 3, message: 'It was his basic organizational principles that were adopted by the pioneer organization.'}
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;