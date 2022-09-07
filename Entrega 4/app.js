const express = require('express')
const productsRouter = require('./routes/products')
const app = express()

app.listen(8080, () => console.log('Server Up!'))

app.use(express.urlencoded({ extended:false})); //funcion para permitir el post por html y por postman
app.use(express.json())
app.use(express.static('public'))
app.use('/api/productos', productsRouter)

