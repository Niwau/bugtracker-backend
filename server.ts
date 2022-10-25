import express from 'express'
import Auth from './src/routes/auth'
import cors from 'cors'
import Bugs from './src/routes/bugs'

const app = express()

app.use(cors())
app.use(express.json())
app.use(Auth)
app.use(Bugs)

app.listen(3000, () => {
    console.log('Servidor iniciado');
})
