import axios from 'axios'

class ClienteHTTP {
    constructor(serverUrl) {
        this.serverUrl = serverUrl
    }
    
    async post(body) {
        try {
            const { data } = await axios.post(`${this.serverUrl}/`, body)
            return data
        } catch (error) {
            const miError = new Error()
            miError.status = error.response.status
            miError.data = error.response.data
            throw miError
        }
        throw new Error('falta implementar!') // TODO: implementar!
    }

}

export default ClienteHTTP