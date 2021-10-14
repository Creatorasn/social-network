import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://vjoy.cc/wp-content/uploads/2019/12/840bfbc98a95b69cc2feab75ac1a538c.jpg' />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post;