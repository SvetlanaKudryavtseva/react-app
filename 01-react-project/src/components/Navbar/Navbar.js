import styles from './Navbar.module.css';
const Navbar = () => {
    return (
    <nav className={styles.nav}>
        <div className={styles.item}><a className={styles.link} href="#">Profile</a></div>
        <div className={styles.item}><a className={styles.link} href="#">Messages</a></div>
        <div className={styles.item}><a className={styles.link}href="#">News</a></div>
        <div className={styles.item}><a className={styles.link} href="#">Music</a></div>
        <div className={styles.item}><a className={styles.link} href="#">Settings</a></div>
    </nav>
    )
}

export default Navbar;