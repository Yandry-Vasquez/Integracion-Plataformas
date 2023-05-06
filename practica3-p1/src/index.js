const env_variables = require('dotenv').config(); env_variables;
const { connection } = require('./dbc'); connection();

const express = require('express')

const app = express()
const port = process.env.PORT

module.exports = app

app.use(express.json())

app.use(require('./routes'))

app.listen(port, () => { console.log(`Servidor funcionando en el puerto ${port}`)})