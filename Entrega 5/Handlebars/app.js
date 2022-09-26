const express = require('express')
const handlebars = require('express-handlebars')

const productsRouter = require('./routes/products')
const app = express()

app.listen(8080, () => console.log('Server Up!'))

app.use(express.urlencoded({ extended:false})); 
app.use(express.json())

app.engine('handlebars', handlebars.engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('form-products')
})

app.use('/productos', productsRouter)

