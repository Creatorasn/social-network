import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.fon} src='https://lh3.googleusercontent.com/proxy/TssbcVP22-VPyUnoOpvrQMr5Hf-hWPfZPyrCvYdqNpgh4dRCPB35DROhfExkzc_sTCgfNbH-pRAEmdHCAOq5km_qx8y2fjriaGQPPjmi9u2SLaZX5AXo' />
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;