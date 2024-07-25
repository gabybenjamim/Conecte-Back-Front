import styles from '../FormC/Input.module.css'

function InputL({type, name, text, placeholder, handleOnChange, value}) {
 return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <input type={type} name={name}
        placeholder={placeholder} id={name} 
        onChange={handleOnChange} value={value} />
    </div>
 )
}

export default InputL