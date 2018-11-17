interface Autor {
    autor_nombre: string;
    autor_apellido: string;
}

class Libo implements Autor {

    autor_nombre;
    autor_apellido;
    private titulo: string;

    constructor(autor_nomre, autor_apellido,  titulo) {
        this.autor_nombre = autor_nomre;
        this.autor_apellido = autor_apellido;
        this.titulo = titulo;
    }

    mostrar() {
        console.log(this);
    }
}

class LibroTec extends Libo {

    categoria: string;

    constructor(autor_nomre, autor_apellido, titulo, categoria = 'Informatica') {
        super(autor_nomre, autor_apellido, titulo );
        this.categoria = categoria;
    }

    mostrar() {
        super.mostrar();
        console.log('Libro técnico');
    }
}

let libro = new LibroTec('Juan', 'Perez' , 'Angular 6');
libro.mostrar();


