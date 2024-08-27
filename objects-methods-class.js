// create Student class
class Student {
    constructor({ name, username = undefined, points }) {
        this._name = name
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

    get courses () {
        return this.approvedCourses
    }

    get name() {
        return this._name
    }

    set name(newName) {
        if(newName.length <= 3 || newName.trim() === '') {
            console.error('new name is unavailable')
        } else {
            this._name = newName
            return this._name
        }
    }



}

// Create daniel object from Student class
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


// create learning paths from LearningPath class
const developmentSchoolPath = new LearningPath('Escuela de Desarrollo Web')
const videoGamesPath = new LearningPath('Escuela de Video Juegos')

// using methods from LearningPath class
developmentSchoolPath.addCourses(['Curso HTML y CSS','Curso de React','Curso de Responsive Design'])
videoGamesPath.addCourses(['Curso Introduccion Produccion Video Juegos', 'Curso Unreal Engine', 'Curso de V-Ray'])


// using methods from Student class on daniel object
daniel.addSocialMedia({
    facebook: undefined,
    instagram: 'misterdan',
    twitter: 'misterdan100',
})

daniel.addApprovedCourses(['Curso HTML y CSS', 'Curso Unreal Engine'])
daniel.addLearningPath([developmentSchoolPath, videoGamesPath])

// Create miguel object from Student class
const miguel = new Student({
    name: 'miguel',
    points: 100,
})

// using methods from Student class on daniel object
miguel.addSocialMedia({
    facebook: undefined,
    instagram: 'miguelito',
    twitter: 'miguelito100',
})

miguel.addApprovedCourses(['Curso HTML y CSS', 'Curso de Responsive Design'])
miguel.addLearningPath([videoGamesPath])

miguel.changeJob(true)


// console.log(daniel)
// console.log(miguel)
// console.log(daniel.getCourses())

const changeName = daniel.name = 'danny'


console.log(changeName)