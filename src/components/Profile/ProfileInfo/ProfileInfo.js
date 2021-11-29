import s from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    
    return (
        <div>
            <div>
                <img className={s.fon} src='https://i.pinimg.com/originals/43/bc/8c/43bc8c7ea88ce6eab968395e6c7f5498.gif' />
            </div>
            <div className={s.profile}>
                <div><img src={props.profile.photos.large} /></div>
                <div>
                    <div className={s.aboutMe}>{props.profile.aboutMe}</div>
                    <div className={s.fullName}>{props.profile.fullName}</div>
                    <div>
                        <span className={s.lookingForAJob}>{props.profile.lookingForAJob ? "Работаю" : "Ищу Работу"}</span>
                        <span className={s.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</span>
                    </div>
                    <div className={s.contacts}>Контакты</div>
                    <div className={s.contactsItems}><span className={s.items}>facebook:</span> {props.profile.contacts.facebook }</div>
                    <div className={s.contactsItems}><span className={s.items}>website:</span> {props.profile.contacts.website}</div>
                    <div className={s.contactsItems}><span className={s.items}>vk:</span> {props.profile.contacts.vk}</div>
                    <div className={s.contactsItems}><span className={s.items}>twitter:</span> {props.profile.contacts.twitter}</div>
                    <div className={s.contactsItems}><span className={s.items}>instagram:</span> {props.profile.contacts.instagram}</div>
                    <div className={s.contactsItems}><span className={s.items}>youtube:</span> {props.profile.contacts.youtube}</div>
                    <div className={s.contactsItems}><span className={s.items}>github:</span> {props.profile.contacts.github}</div>
                    <div className={s.contactsItems}><span className={s.items}>mainLink:</span> {props.profile.contacts.mainLink}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;