import styles from './Message.module.css';
const Message = (props) => {

    return (
        <div className={styles.item}>
            {/* <div className={styles.friend}>
                <img className={styles.avatar}/>
                <p className={styles.name}>{props.name}</p>
            </div> */}
            <div className={styles.text}>{props.text}</div>
        </div>
    )
}

export default Message;