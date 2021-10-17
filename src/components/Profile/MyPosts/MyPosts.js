import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        <Post message='scout post Squirrel' likesCount='0' />
            <Post message='scout post Fox' likesCount='10' />
            <Post message='scout post Tit' likesCount='20' />
        </div>
    );
}

export default MyPosts;