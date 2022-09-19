const express = require('express')
const productsRouter = require('./routes/products')
const app = express()

app.listen(8080, () => console.log('Server Up!'))

app.use(express.urlencoded({ extended:false})); 
app.use(express.json())

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('form-products')
})


app.use('/productos', productsRouter)

