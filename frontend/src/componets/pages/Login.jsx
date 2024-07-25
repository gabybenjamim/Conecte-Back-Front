import LoginForm from '../LoginForm/LoginForm'
import styles from './Login.module.css'

function Login() {
    return (
        <div className={styles.login_container}>
            <h1>Login</h1>
            <p>Faça seu login</p>
            <LoginForm />
        </div>
    )
}

export default Login