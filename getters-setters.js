class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name
        this.classes = classes
    }

    get name() {
        return this._name
    }

    set name(newName) {
        if(newName === 'Nombre no valido') {
            console.error('Nombre no valido')
        } else {
            this._name = newName
            return this.name
        }
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programacion Basica',
})


cursoProgBasica.name = 'Nombre no valido'
console.log(cursoProgBasica)