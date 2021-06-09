import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.item + ' ' + styles.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

export default Dialog;