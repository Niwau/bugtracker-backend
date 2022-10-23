import express from 'express'
import Auth from './src/routes/auth'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(Auth)
app.use(cors())

app.listen(3000, () => {
    console.log('Servidor iniciado');
})
