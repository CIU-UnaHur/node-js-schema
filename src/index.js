const express = require('express')
const route = require('./routes/productos.routes')

const app = express()

app.use(express.json())

app.use(route)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Aplicación corriendo en el puerto : ${PORT}`)
})