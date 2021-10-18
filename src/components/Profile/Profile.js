import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

let posts = [
    {id: 1, message: 'scout post Squirrel', likesCount: 0},
    {id: 2, message: 'scout post Fox', likesCount: 10},
    {id: 3, message: 'scout post Tit', likesCount: 20}
]

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;