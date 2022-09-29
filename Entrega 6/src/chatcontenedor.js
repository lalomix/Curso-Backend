const fs = require('fs')
const pathToFile = './chat.txt'


class ChatContenedor {
    getAll = async () => {
        let chat = []
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            chat = JSON.parse(data)
        }
        return chat
    }
    add = async (message) => {
        let arrayEnMemoria = await fs.promises.readFile(pathToFile, "utf-8")
            let nuevoArray = JSON.parse(arrayEnMemoria)
            nuevoArray.push(Object.assign(message, { id: nuevoArray.length + 1 }, { date:new Date().toLocaleString() }))
            await fs.promises.writeFile(pathToFile, JSON.stringify(nuevoArray, null, 2))
            return nuevoArray 
    }
}
module.exports = ChatContenedor