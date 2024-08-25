function Student({ name, username, points }) {
    this.name = name
    this.username = username
    this.points = points
    this.socialMedia = {}
    this.approvedCourses = []
    this.learningPaths = []
    this.withJob = false
}

Student.prototype.addSocialMedia = function ({ twitter, instagram, facebook }) {
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    }
}

Student.prototype.addApprovedCourses = function (nuevoCurso) {
    this.approvedCourses = [...this.approvedCourses, ...nuevoCurso]
}

Student.prototype.addLearningPaths = function (newPath) {
    this.learningPaths.push(newPath)
}

Student.prototype.changeJobState = function (stateJob) {
    this.withJob = stateJob
}


// path proptotype
function LearningPath(name) {
    this.name = name
    this.courses = []
}

LearningPath.prototype.addCourses = function (newCourse) {
    this.courses = [...this.courses, ...newCourse]
}


// create Daniel object
const daniel = new Student({
    name: 'daniel',
    username: 'misterdan',
    points: 100,
})

daniel.addSocialMedia({
    facebook: undefined,
    instagram: 'misterdan',
    twitter: 'misterdan100'
})

daniel.addApprovedCourses(['Curso HTML y CSS'])
daniel.addApprovedCourses(['Curso Unreal Engine'])

// create Escuela de desarrollo course
const escuelaDesarrolloPath = new LearningPath('Escuela de Desarrollo Web')
escuelaDesarrolloPath.addCourses(['Curso HTML y CSS', 'Curso de React'])
escuelaDesarrolloPath.addCourses(['Curso de Responsive Design'])

const escuelaVideoJuegosPath = new LearningPath('Escuela de Video Juegos')
escuelaVideoJuegosPath.addCourses(['Curso Introduccion Produccion Video Juegos', 'Curso Unreal Engine', 'Curso de V-Ray'])

daniel.addLearningPaths(escuelaDesarrolloPath)

daniel.changeJobState(true)
console.log(daniel)

const miguel = new Student({
    name: 'Miguel',
    username: 'Miguelito',
    points: 100,
})

miguel.addLearningPaths(escuelaVideoJuegosPath)
miguel.addApprovedCourses(['Curso DataBusiness', 'Curso DataViz'])

console.log(miguel)
