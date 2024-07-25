import styles from './Submit.module.css'
import { getFunction } from '../../../services/APIServices'

function Submit({ text }) {

  function btnGetFunction() {
    getFunction().then(data => console.log(data)).catch(err => console.error(err))
  }

  return (
    <div>
      <button className={styles.submit} onClick={btnGetFunction} >{text}</button>
    </div>
  )
}

export default Submit