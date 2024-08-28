//* students classes
class Student {
    constructor({
        name,
        username,
        email,
        instagram = '',
        twitter = '',
        facebook = '',
    }) {
        this.name = name
        this.username = username
        this.email = email
        this.socialNetworks = {
            instagram: instagram,
            twitter: twitter,
            facebook: facebook
        }
        this.approvedCourses = [],
        this.learningPaths = []
    }

    addCourses(course) {
        this.approvedCourses = [...this.approvedCourses, ...course]
        console.log(`Course added correctly!`)
    }

    addPath(learningPath) {
        this.learningPaths = [...this.learningPaths, ...learningPath]
        console.log('Learning Path added correctly!')
    }

    addComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.postComment()
    }


}

//* comment class
class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'student',
        likes = 0,
    }) {
        this.content = content
        this.studentName = studentName
        this.studentRole = studentRole
        this.likes = likes
    }

    postComment() {
        console.log(`${this.studentName} (${this.studentRole}) has commented:`)
        console.log(this.content)
        console.log(`${this.likes} likes`)
    }
}

//* learning path class
class LearningPath {
    constructor(pathName) {
        this.name = pathName
        this.courses = []
    }

    addCourse(courses) {
        this.courses = [...this.courses, ...courses]
        console.log(`Courses added correctly to ${this.name}`)
    }
}

//* Courses Class
class Course {
    constructor({name, classes = [], isFree = false, lang = 'spanish'}) {
        this._name = name
        this.classes = classes
        this.isFree = isFree
        this.lang = lang
    }

    get name() {
        console.log(this._name)
    }

    set name(newName) {
        if(newName.trim() !== '') {
            this._name = newName
            console.log('Name course changed!')
        } else {
            console.warn('New name is invalid!')
        }
    }

    addClases(newClases) {
        this.classes.push(...newClases)
        console.log('Classes added correctly!')
    }
}

//* Class Object
class ClassObj {
    constructor(name) {
        this._name = name
        this._videoID = 'http://platzi.com/' + new Date().getTime()
    }

    get name() {
        console.log(`Clase ${this._name}`)
    }

    playVideo() {
        console.log(`Playing ${this._name} class`)
        console.log(this._videoID)
    }

    stopVideo() {
        console.log(`Stopped ${this._name} class`)
    }

}

// ---------------------
class FreeStudent extends Student {
    constructor(props) {
        super(props)
    }

    approvedCourse(course) {
        if(course.isFree === true) {
            this.approvedCourses.push(course)
            console.log(`Free course added correctly!`)
        } else {
            console.warn("This student can't take this course")
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props)
    }

    approvedCourse(course) {
        if(course.lang !== 'english') {
            this.approvedCourses.push(course)
        } else {
            console.warn("Basic Students can't take english courses")
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props)
    }

    approvedCourses(course) {
        this.approvedCourses.push(course)
        console.log('Course added correctly!')
    }
}

class TeacherStudent extends ExpertStudent {
    constructor(props) {
        super(props)
        this.isAdmin = true
    }

    addComment(comment) {
        const newComment = new Comment({
            content: comment,
            studentName: this.name,
            studentRole: 'teacher'
        })

        newComment.postComment()
    }
}


const daniel = new Student({
    name: 'Daniel Merchan',
    email: 'merchanmd@gmail.com',
    username: 'misterdan',
    facebook: undefined,
    instagram: 'misterdan',
    twitter: 'misterdan100'
})

const webProgramingPath = new LearningPath('Escuela de Desarrollo Web')
const pooCourse = new Course({name: 'Programacion Orientada a Objetos con JS', isFree: true})
const reactCourse = new Course({name: 'Programacion Orientada a Objetos con JS'})

const polimorfismoClass = new ClassObj('Porlimorfismo en POO')

pooCourse.addClases(['Abstraction on JS', 'Polimorfismo'])
// daniel.addComment('Este curso es el mejor')

const miguel = new FreeStudent({name: 'Miguel Gonzales', username: 'miguelon', email: 'miguelon@gmail.com'})
miguel.approvedCourse(pooCourse)

const freddy = new TeacherStudent({
    name: 'Freddy Vega',
    username: 'freddier',
    email: 'freddier@platzi.com',

})

freddy.addComment('Lo peor que puede pasar es nada')