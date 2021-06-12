import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
    let dialogData = [
        {name: 'Olga', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Yulya', id: 3}
    ]
    let dialogItems = [
        <Dialog name={dialogData[0].name} id={dialogData[0].id}/>,
        <Dialog name={dialogData[1].name} id={dialogData[1].id}/>,
        <Dialog name={dialogData[2].name} id={dialogData[2].id}/>
    ]
    let messageData = [
        {text: 'Olga: Hi', id: 1},
        {text: 'Sveta: Hi', id: 2},
        {text: 'Yulya: Hi hi', id: 3}
    ]

    
    
    return (
        <div className={styles.wrap}>
            <div className={styles.friend__list}>
                {dialogItems}
            </div>
            <div className ={styles.messages__list}>
                <Message text={messageData[0].text}/>
                <Message text={messageData[1].text}/>
                <Message text={messageData[2].text}/>
            </div>
        </div>
    )
}

export default Dialogs;