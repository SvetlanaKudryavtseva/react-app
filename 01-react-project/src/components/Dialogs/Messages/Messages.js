import styles from './Messages.module.css';
const Messages = () => {

    return (
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.friend}></div>
                <div className={styles.text}>message</div>
            </div>
        </div>
    )
}

export default Messages;