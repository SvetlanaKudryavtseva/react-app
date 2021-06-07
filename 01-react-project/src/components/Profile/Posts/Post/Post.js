import styles from './Post.module.css';
const Post = (props) => {
    return (
        <div className={styles.item}>
            <p>{props.message}</p>
            <p>Likes {props.likesCount}</p>
        </div>
    )
    }
export default Post;
