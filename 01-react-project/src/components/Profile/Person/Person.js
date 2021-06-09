import styles from './Person.module.css';
const Person = () => {
    return (
        <div className={styles.wrap}>
            <img className={styles.img} src="https://about.fb.com/wp-content/uploads/2018/01/well-being.png?fit=1258%2C706" alt="" />
            <div className={styles.description}>
                <img className={styles.avatar} src="https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg" alt="" />
                <div className={styles.info}>
                    <p className={styles.name}>Eva</p>
                    <p className={styles.surname}>Adams</p>
                </div>
            </div>
        </div>
    )
}

export default Person;
