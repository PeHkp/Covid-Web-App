import axios from "axios"

const api = axios.create({
    baseURL : "https://bigdata-api.fiocruz.br/numero/casos/pais/"
})
export default api