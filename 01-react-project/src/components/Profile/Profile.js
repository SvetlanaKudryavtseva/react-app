import Posts from './Posts/Posts';
import styles from './Profile.module.css';
const Profile = () => {
    return (
    <div className={styles.content}>
        <img className={styles.img} src="https://about.fb.com/wp-content/uploads/2018/01/well-being.png?fit=1258%2C706" alt="" />
        <div className={styles.person}>
            <img className={styles.person_avatar} src="https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg" alt="" />
            <div className={styles.person_info}>
                <p className={styles.person_name}>Eva</p>
                <p className={styles.surname}>Adams</p>
            </div>
            <Posts />
        </div>
    </div>
)
}

export default Profile;