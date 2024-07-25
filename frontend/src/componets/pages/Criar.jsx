import CriarForm from '../CriarForm/CriarForm'
import styles from './Criar.module.css'
import { getCadastro } from '../../../services/APIServices'
import { useEffect } from 'react'

function Criar() {
 const [criar, setCriar] = useState([])
 useEffect(() => {
    fetchCriar()
 }, [])

 async function fetchCriar() {
    const criarDaAPI = await getCadastro()
    setCriar(criarDaAPI)

 }

    return (
        <div className={styles.criar_container}>
            <h1>Criar Conta</h1>
            <p>Crie uma conta e junte-se a nós</p>
            <CriarForm />
        </div>
    )
}

export default Criar