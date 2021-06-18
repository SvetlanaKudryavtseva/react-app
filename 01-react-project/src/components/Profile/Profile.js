import Person from './Person/Person';
import Posts from './Posts/Posts';
import styles from './Profile.module.css';

const Profile = (props) => {

    return (
        <div className={styles.content}>
            <Person />
            
            <Posts data_posts={props.data_posts} />
        </div>
    )
}

export default Profile;