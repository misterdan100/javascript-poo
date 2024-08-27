export class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name
    }
  
    set name(nuevoNombrecito) {
      // Tu código aquí 👈
      if (typeof (nuevoNombrecito) === 'string' && nuevoNombrecito.trim() !== '') {
        console.log('entrando')
        const capitalizedName = nuevoNombrecito.trim().split(' ').map(word => {
            const capi = word.split('')
          capi[0] = capi[0].toUpperCase()
          word = capi.join('')
          return word
        })
  
        this._name = capitalizedName.join(' ')
      }
    }
  }


const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
    name: courseName,
})


nombreMaysuculas.name = ''
console.log(nombreMaysuculas.name)