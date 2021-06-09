import styles from './Dialogs.module.css';
import Messages from './Messages/Messages';
const Dialogs = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.list}>
                <div className={styles.item + ' ' + styles.active}>Ira</div>
                <div className={styles.item}>Sveta</div>
                <div className={styles.item}>Dima</div>
                <div className={styles.item}>Sasha</div>
                <div className={styles.item}>Lena</div>
            </div>
            <Messages />
        </div>
    )
}

export default Dialogs;