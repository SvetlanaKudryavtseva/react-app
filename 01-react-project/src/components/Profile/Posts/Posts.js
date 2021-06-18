import styles from './Posts.module.css'
import Post from './Post/Post'
const Posts = (props) => {
    
let postItems = props.data_posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>) 
    return (
    <div className={styles.wrap}>
        <textarea className={styles.textarea}>My Posts</textarea>
        
        <button className={styles.button}>Submit</button>
        <div className={styles.new_post}></div>
        <div className={styles.list}>
            { postItems }
        </div>
    </div>
    )
}
export default Posts;