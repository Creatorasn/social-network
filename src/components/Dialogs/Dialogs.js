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

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Squirrel" id="1" />
                <DialogItem name="Fox" id="2" />
                <DialogItem name="Tit" id="3" />
                <DialogItem name="Wolf" id="4" />
                <DialogItem name="Phoenix" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="When did the first scouts appear?" />
                <Message message="The scout movement originated a long time ago and still exists." />
                <Message message="It was his basic organizational principles that were adopted by the pioneer organization." />
            </div>
        </div>
    )
}

export default Dialogs;