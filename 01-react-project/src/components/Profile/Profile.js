import Person from './Person/Person';
import Posts from './Posts/Posts';
import styles from './Profile.module.css';
import './../../data/data'
const Profile = (props) => {
    let data_posts = [
        {id: 1, message: '1st message', likesCount: '23'},
        {id: 2, message: '2nd message', likesCount: '17'},
      ]
    return (
        <div className={styles.content}>
            <Person />
            <Posts data = { data_posts } />
        </div>
    )
}

export default Profile;