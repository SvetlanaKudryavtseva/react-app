import styles from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Dialog from './Dialog/Dialog';
const Dialogs = () => {
    return (
        <div className={styles.wrap}>
            
            <div className={styles.list}>
                <Dialog name="Olga" id="1"/>
                <Dialog name="Sveta" id="2"/>
                <Dialog name="Yulya" id="3"/>

            </div>
            <Messages />
        </div>
    )
}

export default Dialogs;