const express = require('express')
const router = express.Router()
const Contenedor = require('../contenedor')
const obtenerProductos = new Contenedor()

router.get("/", async (req, res) => {
    const productos= await obtenerProductos.getAll();
    res.render('show-products', {productos})
})
router.post('/', (req, res)=> {
    obtenerProductos.add(req.body).then((result) => res.redirect('/'));
})
module.exports = router