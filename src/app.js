import express from 'express'//importar la librerí express
import config from './config'

import clientesRoutes from './routes/clientes.routes'

const app = express() //app tiene el uso del express

//settings
app.set("port",config.port)

//middlewares
app.use(express.json()) //permite  que los datos se envian en formato json
app.use(express.urlencoded({ extended: false }));//recibe datos que viene del formulario html


app.use(clientesRoutes)

export default app //exportamos app