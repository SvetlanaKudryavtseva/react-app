import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
    let dialogs = [
        {name: 'Olga', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Yulya', id: 3}
    ]
    let dialogItems = dialogs.map ( d => <Dialog name={d.name} id={d.id}/> )
    let messages = [
        {text: 'Olga: Hi', id: 1},
        {text: 'Sveta: Hi', id: 2},
        {text: 'Yulya: Hi hi', id: 3}
    ]
    let messageItems = messages.map ( m =>  <Message text={m.text}/>)
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