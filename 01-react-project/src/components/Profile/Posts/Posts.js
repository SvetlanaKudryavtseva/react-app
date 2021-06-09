import styles from './Posts.module.css'
import Post from './Post/Post'
const Posts = () => {
    let postData = [
        {id: 1, message: '1st message', likesCount: '23'},
        {id: 2, message: '2nd message', likesCount: '17'},
    ]
    
    return (
    <div className={styles.wrap}>
        <textarea className={styles.textarea}>My Posts</textarea>
        <button className={styles.button}>Submit</button>
        <div className={styles.new_post}></div>
        <div className={styles.list}>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>
    </div>
    )
}
export default Posts;