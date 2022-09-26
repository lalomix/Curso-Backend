const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')


const productsRouter = require('./routes/products')
const chatRouter = require('./routes/chat')
const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server Up in port ${PORT}`))
const io = new Server(server)

const Manager = require('./chatcontenedor')
const manager = new Manager()

app.use(express.urlencoded({ extended:true})); 
app.use(express.json())
app.use(express.static('public'))

app.engine('handlebars', handlebars.engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.redirect('/productos')
})

app.use('/productos', productsRouter)
app.use('/chat', chatRouter)

// sin persistencia en archivo
// let history = []
// io.on('connection', socket => {
//     socket.broadcast.emit('newUser')
//     socket.on('message', data => {
//         history.push(data)
//         io.emit('history', history)
//     })
// })
io.on('connection', socket => {
   manager.getAll().then(result => socket.emit('chatHistory', result))
    socket.on('chat', data => {
        io.emit('chatHistory', data)
    })
})