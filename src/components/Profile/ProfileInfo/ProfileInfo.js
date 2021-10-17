import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.fon} src='https://i.pinimg.com/originals/43/bc/8c/43bc8c7ea88ce6eab968395e6c7f5498.gif' />
            </div>
            <div>ava + description</div>
        </div>
    )
}

export default ProfileInfo;