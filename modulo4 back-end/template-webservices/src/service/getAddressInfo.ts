import axios from 'axios'
import { Address } from '../types'

//https://viacep.com.br/ws/:cep/json/

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string): Promise<Address | null> => {
    try {
        const response = await axios.get(`${baseUrl}/${zipcode}/json/`)
        const address: Address = {
            Estado: response.data.uf,
            Cidade: response.data.localidade,
            Logradouro: response.data.bairro,
            Rua: response.data.logradouro,
            Cep: response.data.cep,
            Complemento :response.data.complemento,
            Numero:response.data.numero
        }

        return address
    } catch (error) {
        console.error("Erro no serviço getAddressInfo: ", error)
        return null
    }
}