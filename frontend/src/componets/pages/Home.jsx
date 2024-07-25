import styles from './Home.module.css'
import maos from '../../../img/maos.jpeg'
import LinkButton from '../layout/LinkButton'

function Home() {
 return (
    <section className={styles.home_container}>
        <h1>Empreendedorismo</h1>
                <h1>& Conexão</h1>
                <p>JUNTE-SE A NÓS E CONECTE-SE AO EMPREENDEDORISMO BRASILEIRO!</p>


                <LinkButton to="/login" text="Login" />
                <LinkButton to="/criar" text="Criar" />
               
                   
            {<img src={maos} alt="img do fundo" className={styles.img_fundo} />}            

    </section>
 )
}

export default Home