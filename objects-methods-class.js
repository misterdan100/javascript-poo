class Student {
    constructor({ name, username, points }) {
        this.name = name
        this.username = username
        this.points = points
        this.socialMedia = {}
        this.approvedCourses = []
        this.learningPaths = []
        this.withJob = false
    }

    addSocialMedia({ facebook, instagram, twitter }) {
        this.socialMedia = {
            ...this.socialMedia,
            facebook,
            instagram,
            twitter,
        }
    }

    addApprovedCourses(cursos) {
        this.approvedCourses = [...this.approvedCourses, ...cursos]
    }

    addLearningPath(newPath) {
        this.learningPaths = [...this.learningPaths, ...newPath]
    }

    changeJob(state) {
        this.withJob = state
    }

    getCourses () {
        return this.approvedCourses
    }



}

const daniel = new Student({
    name: 'Daniel',
    username: 'misterdan',
    points: 100,
})


// define LearningPath Class
class LearningPath {
    constructor(name) {
        this.name = name,
            this.courses = []
    }

    addCourses(course) {
        this.courses = [...this.courses, ...course]
    }
}


// create learning paths
const developmentSchoolPath = new LearningPath('Escuela de Desarrollo Web')
const videoGamesPath = new LearningPath('Escuela de Video Juegos')

developmentSchoolPath.addCourses(['Curso HTML y CSS','Curso de React','Curso de Responsive Design'])

videoGamesPath.addCourses(['Curso Introduccion Produccion Video Juegos', 'Curso Unreal Engine', 'Curso de V-Ray'])


// Create daniel object

daniel.addSocialMedia({
    facebook: undefined,
    instagram: 'misterdan',
    twitter: 'misterdan100',
})

daniel.addApprovedCourses(['Curso HTML y CSS', 'Curso Unreal Engine'])
daniel.addLearningPath([developmentSchoolPath, videoGamesPath])

const miguel = new Student({
    name: 'miguel',
    username: 'miguelito',
    points: 100,
})

daniel.addSocialMedia({
    facebook: undefined,
    instagram: 'miguelito',
    twitter: 'miguelito100',
})

miguel.addApprovedCourses(['Curso HTML y CSS', 'Curso de Responsive Design'])
miguel.addLearningPath([videoGamesPath])


miguel.changeJob(true)


console.log(daniel)
console.log(miguel)
console.log(daniel.getCourses())