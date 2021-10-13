import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.fon} src='https://lh3.googleusercontent.com/proxy/TssbcVP22-VPyUnoOpvrQMr5Hf-hWPfZPyrCvYdqNpgh4dRCPB35DROhfExkzc_sTCgfNbH-pRAEmdHCAOq5km_qx8y2fjriaGQPPjmi9u2SLaZX5AXo' />
            </div>
            <div>ava + description</div>
            <div>My post</div>
            <div>post 1</div>
            <div>post 2</div>
        </div>
    )
}

export default Profile;