import axios from 'axios'

const criarAPI = axios.create({baseURL: "http://localhost:3000/criar"})

async function getCadastro() {
    const response = await criarAPI.get(`/`)
    return response.data
}

export {
    getCadastro
}