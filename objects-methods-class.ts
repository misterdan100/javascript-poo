type StudentParams = {
    name: string,
    username?: undefined | string
    points: number
}

type SocialMediaParams = {
    facebook: string | undefined
    instagram: string | undefined
    twitter: string | undefined
}


class Student {
    // types
    name: string
    username: string | undefined
    points: number
    socialMedia: object
    approvedCourses: string[]
    learningPaths: object[]
    withJob: boolean


    constructor({ name, username = undefined, points }: StudentParams) {
        this.name = name
        this.username = username
        this.points = points
        this.socialMedia = {}
        this.approvedCourses = []
        this.learningPaths = []
        this.withJob = false
    }

    addSocialMedia({ facebook, instagram, twitter }: SocialMediaParams) {
        this.socialMedia = {
            ...this.socialMedia,
            facebook,
            instagram,
            twitter,
        }
    }

    addApprovedCourses(cursos: string[]): void {
        this.approvedCourses = [...this.approvedCourses, ...cursos]
    }

    addLearningPath(newPath: object[]): void {
        this.learningPaths = [...this.learningPaths, ...newPath]
    }

    changeJob(state: boolean): void {
        this.withJob = state
    }

    getCourses (): string[] {
        return this.approvedCourses
    }



}

const daniel1 = new Student({
    name: 'Daniel',
    username: 'misterdan',
    points: 100,
})


// define LearningPath Class
class LearningPath {
    // types
    name: string
    courses: string[]

    constructor(name: string) {
        this.name = name,
            this.courses = []
    }

    addCourses(course: string[]): void {
        this.courses = [...this.courses, ...course]
    }
}


// create learning paths
const developmentSchoolPath = new LearningPath('Escuela de Desarrollo Web')
const videoGamesPath = new LearningPath('Escuela de Video Juegos')

developmentSchoolPath.addCourses(['Curso HTML y CSS','Curso de React','Curso de Responsive Design'])

videoGamesPath.addCourses(['Curso Introduccion Produccion Video Juegos', 'Curso Unreal Engine', 'Curso de V-Ray'])


// Create daniel object

daniel1.addSocialMedia({
    facebook: undefined,
    instagram: 'misterdan',
    twitter: 'misterdan100',
})

daniel1.addApprovedCourses(['Curso HTML y CSS', 'Curso Unreal Engine'])
daniel1.addLearningPath([developmentSchoolPath, videoGamesPath])

const miguel = new Student({
    name: 'miguel',
    points: 100,
})

daniel1.addSocialMedia({
    facebook: undefined,
    instagram: 'miguelito',
    twitter: 'miguelito100',
})

miguel.addApprovedCourses(['Curso HTML y CSS', 'Curso de Responsive Design'])
miguel.addLearningPath([videoGamesPath])


miguel.changeJob(true)


console.log(daniel)
console.log(miguel)
console.log(daniel1.getCourses())