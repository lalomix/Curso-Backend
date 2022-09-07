const fs = require('fs')
const pathToFile = './productos.txt'

class Contenedor {
        getAll = async () => {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            return productos.length !== 0 ? productos : "No existen productos almacenados aun";
        }
        getById = async (id) => {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            let producto = productos.find(producto => producto.id === id)
            return producto
        }
        add = async (newProd) => {
            let arrayEnMemoria = await fs.promises.readFile(pathToFile, "utf-8")
            let nuevoArray = JSON.parse(arrayEnMemoria)
            nuevoArray.push(Object.assign(newProd, { id: nuevoArray.length + 1 }))
            await fs.promises.writeFile(pathToFile, JSON.stringify(nuevoArray, null, 2))
            return `El producto con nombre: ${newProd.name} ha sido agregado correctamente bajo el id: ${newProd.id}`;
        }
        updateById = async (id, prod) => {
            let data = await fs.promises.readFile(pathToFile, "utf-8");
            let productos = JSON.parse(data);
            productos[id].nombre = prod.nombre;
            productos[id].price = prod.price;
            productos[id].thumbnail = prod.thumbnail;
            await fs.promises.writeFile(pathToFile,JSON.stringify(productos, null, "\t"));
            return true;
        }        
        deleteById = async (id) => {
            let data = await fs.promises.readFile(pathToFile, "utf-8");
            let productos = JSON.parse(data);
            let producto = productos.findIndex((datadelete) => datadelete.id === id);
            productos.splice(producto, 1);
            await fs.promises.writeFile(pathToFile,JSON.stringify(productos, null, "\t"));
            return true;
        }

}

module.exports = Contenedor