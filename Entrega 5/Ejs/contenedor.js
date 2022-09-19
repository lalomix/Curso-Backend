const fs = require('fs')
const pathToFile = './productos.txt'

class Contenedor {
        getAll = async () => {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            return productos.length !== 0 ? productos : "No existen productos almacenados aun";
        }
        add = async (newProd) => {
            let arrayEnMemoria = await fs.promises.readFile(pathToFile, "utf-8")
            let nuevoArray = JSON.parse(arrayEnMemoria)
            nuevoArray.push(Object.assign(newProd, { id: nuevoArray.length + 1 }))
            await fs.promises.writeFile(pathToFile, JSON.stringify(nuevoArray, null, 2))
            return nuevoArray 
        }
}
module.exports = Contenedor