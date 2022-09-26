const express = require('express')
const router = express.Router()
const ChatContenedor = require('../chatcontenedor')
const obtenerChat = new ChatContenedor()


router.get('/', (req, res) => {
   obtenerChat.getAll().then(result => res.send(result))
})

router.post('/', (req, res) => {
   obtenerChat.add(req.body).then((result) => res.redirect('/productos'));
  
})

module.exports = router