class Libo {
    constructor(autor, titulo){
        this.autor= autor
        this.titulo= titulo
    }

    mostrar(){
        console.log(this)
    }
}

class LibroTec extends Libo{
    constructor(autor, titulo, categoria='Informatica'){
        super(autor,titulo)
        this.categoria= categoria
    }
}

let libro1= new LibroTec("J. Perez" , "Aprender Angular")

libro1.editorial = "Ra-ma"
libro1.mostrar()
