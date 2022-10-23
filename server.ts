import express from 'express'
import Auth from './src/routes/auth'

const app = express()

app.use(express.json())
app.use(Auth)

app.listen(3000, () => {
    console.log('Servidor iniciado');
})
