const daniel = {
    name: 'Daniel',
    age: 20,
    cursosAprovados: [
        'Curso definitivo HTML y CSS',
        'Curso practico HTML y CSS',
    ],

    aprobarCursor: function(curso) {
        this.cursosAprovados.push(curso)
    }

}

daniel.aprobarCursor('js ppo')

console.log(daniel)

// create objects from prototypes
function Student(name, age, courses) {
    this.name = name,
    this.age = age,
    this.courses = courses || []
}

const natalida = new Student('Nath', 23, ['html', 'css'])


Student.prototype.aprobarCurso = function (curso) {
    this.courses.push(curso)
}

natalida.aprobarCurso('javascript')

console.log(natalida)