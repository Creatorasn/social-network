import s from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
    {id: 1, message: 'scout post Squirrel', likesCount: 0},
    {id: 2, message: 'scout post Fox', likesCount: 10},
    {id: 3, message: 'scout post Tit', likesCount: 20}
]

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message={postData[0].message} likesCount={postData[0].likesCount} />
            <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            <Post message={postData[2].message} likesCount={postData[2].likesCount} />
        </div>
    );
}

export default MyPosts;