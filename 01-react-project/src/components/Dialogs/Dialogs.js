import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogItems = props.data_dialogs.map ( d => <Dialog name={d.name} id={d.id}/> )
    let messageItems = props.data_messages.map ( m =>  <Message text={m.text}/>)
    return (
        <div className={styles.wrap}>
            <div className={styles.friend__list}>
                {dialogItems}
            </div>
            <div className ={styles.messages__list}>
                { messageItems }
            </div>
        </div>
    )
}

export default Dialogs;