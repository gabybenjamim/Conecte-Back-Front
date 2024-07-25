import {Link} from 'react-router-dom'
import Container from './container'
import styles from './Navbar.module.css'
import logo from '../../../img/conectelogo.png'

function Navbar() {
return (
    <nav className={styles.navbar}>
        <Container>
            <Link to="/">
            <img src={logo} alt="logo c" />
             </Link>
             <ul className={styles.list}>
                <li className={styles.item}>
                <Link to="/">Inicio</Link>
          
                </li>
                <li className={styles.item}>
                <Link to="/services">Serviços</Link>
                </li>
                <li className={styles.item}>
                <Link to="/about">Sobre</Link>
                </li>

             </ul>
        </Container>
            </nav> 
)

}

export default Navbar