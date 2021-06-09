import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.friend__list}>
                <Dialog name="Olga" id="1"/>
                <Dialog name="Sveta" id="2"/>
                <Dialog name="Yulya" id="3"/>
            </div>
            <div className ={styles.messages__list}>
                <Message text="Olga: Hi"/>
                <Message text="Sveta: Hi"/>
                <Message text="Yulya: Hi"/>
            </div>
        </div>
    )
}

export default Dialogs;