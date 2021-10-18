import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
    {id: 1, message: 'scout post Squirrel', likesCount: 0},
    {id: 2, message: 'scout post Fox', likesCount: 10},
    {id: 3, message: 'scout post Tit', likesCount: 20}
]

let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;