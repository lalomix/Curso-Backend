const ManejoProductos = require('./manejoProductos.js')
const manejoProductos = new ManejoProductos()

let producto = {
    title: "Arroz Miraflores",
    price: 980,
    thumbnail: "https://www.productos.com/arroz.jpg"    
}


// descomentar de uno para testear cada metodo

// manejoProductos.save(producto).then(result => console.log(result))
// manejoProductos.getById(1).then(result => console.log(result))
// manejoProductos.getAll().then(result => console.log(result))
// manejoProductos.deleteById(1).then(result => console.log(result))
// manejoProductos.deleteAll().then(result => console.log(result))