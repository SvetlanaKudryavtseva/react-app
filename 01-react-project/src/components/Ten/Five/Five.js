import styles from './Five.module.css';

const Five = (props) => {
/* let multiplication = {
        number: '5',
        factor: '2',
        operation: '*',
      } */
      
      return (
    <>
        <span>
          Number {props.number} 
        </span>
        <span>
          Factor {props.factor} 
        </span>
        <h3></h3>
    </>
    )
}

export default Five;