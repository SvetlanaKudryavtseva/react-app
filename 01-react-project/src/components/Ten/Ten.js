import styles from './Ten.module.css'
import Five from './Five/Five'


const Ten = (props) => {
    console.log('data', props.data_multiplication)

    return (
      
    <div className="ten">
        <p>10_10_10_10</p>
        <p>5_5_5</p>
        <Five number={props.data_multiplication.number} factor={props.data_multiplication.factor}/>
        
        <Five />

    </div>
    )
}

export default Ten;