import styles from '../CriarForm/CriarForm.module.css'
import InputL from '../FormL/Input'
import Submit from '../FormC/Submit'

function LoginForm() {
 return(
    <form className={styles.form} >
        <div>
<InputL type="email" text="Seu email" name="email" placeholder="insira seu email" />
        </div>
        <div>
<InputL type="password" text="Sua senha" name="password" placeholder="insira sua senha" />  
        </div>
        <div>
        <Submit text="Fazer login" />
        </div>
    </form>
 )
}

export default LoginForm