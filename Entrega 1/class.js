export class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){

    console.log( ` Mi nombre completo es ${this.nombre} ${this.apellido}`)

    }
    addMascota(){  
        let bucle = 1 // inserte este bucle para que se ejecute solo 1 vez
        while (bucle <= 1) {

        let input = prompt ("ingrese mascota:")
        this.mascotas.push(input)
        console.log(this.mascotas)  
        bucle++
        }

    }
    countMascotas(){

        console.log( ` Tienes ${this.mascotas.length} mascotas, te felicito!`)
       
    }
    addBook(){

        let bucle = 1
        while (bucle <= 1) {
            let inputLibro = prompt ("ingrese el nombre de su libro favorito:")
            let inputAutor = prompt ("ingrese el autor de su libro favorito:")
            this.libros.push({nombre: inputLibro, autor: inputAutor})
        bucle++
        }


    }
    getBookNames(){
        console.log(this.libros.map((res) => res.nombre))
    }
}

let usuario1 = new Usuario('Eduardo', 'Vargas',[{nombre:'El Quijote de la Mancha', autor:'Miguel de Cervantes'},{nombre:'Harry Potter', autor:'J. K. Rowling'},{nombre:'Papelucho', autor:'Marcela Paz'}],['perro','tortuga','loro'])

usuario1.getFullName()
usuario1.addMascota()
usuario1.countMascotas()
usuario1.addBook()
usuario1.getBookNames()