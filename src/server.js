const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// conexão com o banco de dados
db.connect()

// habilita CORS
const allowedOrigins = [
    // '*',                     // * - Libera acesso para todas Origins
    'http://127.0.0.1:5500',
    'http://www.app.com.br',
]
app.use(cors({
    origin: function (origin, callback) {
        let allowed = true

        // mobile app or Clients http
        if (!origin) allowed = true
        
        // recusa origin fora da allowedOrigins
        if (!allowedOrigins.includes(origin)) allowed = false
        
        // libera todos os origin se tiver definido * na lista
        if (allowedOrigins.includes('*')) allowed = true

        callback(null, allowed);
    }
}))

// habilita server para receber dados no formato json
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))