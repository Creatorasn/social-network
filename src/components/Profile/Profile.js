import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.fon} src='https://lh3.googleusercontent.com/proxy/r2w_rP4F8cO6Nz83n3ZH7vELzWmg6Qg79xgQTuJmPqUvx1XHB5IkqPW-itM4YRJBYL7HN4y-RCc1-gPdfAJPR-5tJQH7M5zXWu6NM4l_xizGpFvrXR6r' />
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;