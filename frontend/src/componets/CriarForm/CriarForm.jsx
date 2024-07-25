import { useState, useEffect } from 'react'
import React from 'react'
import styles from './CriarForm.module.css'
import Input from '../FormC/Input'
import Select from '../FormC/Select'
import Submit from '../FormC/Submit'

function CriarForm() {

    const [categories, setCategories] = useState ([])

    useEffect (() => {   
    fetch ("http://localhost:5000/categories", {
        method: "GET",
        headers : {
            'Content-Type': 'application/json'
        },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        }) 
        .catch(err => console.log(err))
    
    }, [])

    return (
        <form className={styles.form}>
            <div>
<Input type="text" text="Seu nome" name="name" placeholder="Insira o seu nome" />
            </div>
            <div>
<Input type="email" text="Seu email" name="email" placeholder="Insira seu email" />
            </div>
            <div>
<Input type="password" text="Crie uma senha" name="password" placeholder="insira sua senha"/>
            </div>
            <div>
<Input type="password" text="Confirme sua senha" name="password" placeholder="confirme sua senha"/>
            </div>
            <div>
<Input type="text" text="Seu espaço" name="name" placeholder="Insira o nome do seu espaço" />

            </div>
            <div>
           <Select name="category_id" text="Selecione a categoria"  options={categories}/>
            </div>
            <div>
                <Submit text="Criar Conta" />
            </div>
        </form>
    )
}

export default CriarForm