import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav className={styles.nav}>
        <div className={styles.item}><NavLink className={styles.link} to="/profile">Profile</NavLink></div>
        <div className={styles.item}><NavLink className={styles.link} to="/dialogs">Messages</NavLink></div>
        <div className={styles.item}><NavLink className={styles.link} to="/news">News</NavLink></div>
        <div className={styles.item}><NavLink className={styles.link} to="/music">Music</NavLink></div>
        <div className={styles.item}><NavLink className={styles.link} to="/settings">Settings</NavLink></div>
    </nav>
    )
}

export default Navbar;