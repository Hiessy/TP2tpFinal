import ClienteHTTP from './lib/clienteHTTP.js';
import Mailer from './lib/mailer.js';

const clienteUsuario = new ClienteHTTP('http://localhost:3000/usuarios')
const mailer = new Mailer()

const data = {
	nombre: "pepe", //reemplazar
	correo: "darkpig@gmail.com" //reemplazar
}

const response = await clienteUsuario.post(data)
mailer.send(data.correo)
console.log(response)
