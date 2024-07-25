import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'

function LinkButton({to, text}) {
 return(
    <Link className={styles.btn} to={to}>
    {text}
    </Link>
 )
}

export default LinkButton