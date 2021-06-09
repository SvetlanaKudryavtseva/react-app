import Person from './Person/Person';
import Posts from './Posts/Posts';
import styles from './Profile.module.css';
const Profile = () => {
    return (
        <div className={styles.content}>
            
            <Person />
            <Posts />
        </div>
    )
}

export default Profile;