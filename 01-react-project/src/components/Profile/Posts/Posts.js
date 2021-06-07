import styles from './Posts.module.css'
import Post from './Post/Post'
const Posts = () => {
    return (
    <div className={styles.posts}>
        <textarea className={styles.heading}>My Posts</textarea>
        <button>Submit</button>
        <div className={styles.new_post}></div>
        <div className={styles.list}>
            <Post message='1st message' likesCount='23'/>
            <Post message='2nd message' likesCount='7'/>
        </div>
    </div>
    )
}
export default Posts;