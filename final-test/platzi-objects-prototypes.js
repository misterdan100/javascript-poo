//* Student prototype
function Student({
    name,
    username,
    mail,
    facebook = undefined,
    instagram = undefined,
    twitter = undefined,
}) {
    this.name = name,
        this.username = username,
        this.mail = mail,
        this.socialNetwork = {
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
        }
    this.approvedCourses = []
    this.learningPaths = []
}

Student.prototype.approvedCourse = function (course) {
    this.approvedCourses.push(course)
    console.log('Course added correctly')
}

Student.prototype.addPath = function (learningPath) {
    this.learningPaths.push(learningPath)
    console.log('Learning Path added correctly!')
}

Student.prototype.addComment = function(contentComment) {
    const newComment = new Comment({
        content: contentComment,
        studentName: this.name,
    })

    newComment.postComment()
}

//* comment prototype
function Comment({
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

Comment.prototype.postComment = function() {
    console.log(`${this.studentName} (${this.studentRole}) has commented:`)
    console.log(`"${this.content}"`)
    console.log(`${this.likes} likes`)
}

//* Learning Path prototype
function LearningPath({
    name,
    courses = []
}) {
    this.name = name,
    this.courses = courses
}

LearningPath.prototype.addCourse = function(course) {
    this.courses.push(course)
    console.log(`Course was added!`)
}

//* Course Prototypes 
function Course({
    name,
    classes = [],
    isFree = false,
    lang = 'spanish'
}) {
    this._name = name
    this.classes = classes
    this.isFree = isFree
    this.lang = lang
}

Course.prototype.addClasses = function(newClass) {
    this.classes.push(...newClass)
    console.log(`New clases was added!`)
}

Course.prototype.name = function() {
    console.log(this._name)
}

Object.defineProperty(Course.prototype, 'name', {
    get: function() {
        console.log(this._name)
    },

    set: function(newName) {
        if(newName.trim() !== '') {
            this._name = newName
            console.log(`Name has been changed!`)
        } else {
            console.warn('New name is invalid!')
        }
    }

})


//* Inherit class
function FreeStudent(name,
    username,
    mail,
    facebook = undefined,
    instagram = undefined,
    twitter = undefined,) {
    Student.call(this, // inherit properties
        name,
        username,
        mail,
        facebook,
        instagram,
        twitter,)
    this.plan = []
}

FreeStudent.prototype = Object.create(Student.prototype) // inherit methods
FreeStudent.prototype.constructor = FreeStudent

FreeStudent.prototype.approvedCourse = function(course) {
    if(course.isFree === true) {
        this.approvedCourses.push(course)
        console.log(`Free course added correctly!`)
    } else {
        console.warn("This student can't take this course")
    }
}

//* Basic Student prototype
function BasicStudent({
    name,
    username,
    mail,
    facebook = undefined,
    instagram = undefined,
    twitter = undefined,
}) {
    Student.call(this, 
        name,
        username,
        mail,
        facebook,
        instagram,
        twitter,
    )
}

BasicStudent.prototype = Object.create(Student.prototype) //* inherit methods
BasicStudent.prototype.constructor = BasicStudent

BasicStudent.prototype.approvedCourse = function(course) {
    if(course.lang !== 'english') {
        this.approvedCourses.push(course)
        console.log(`Free course added correctly!`)
    } else {
        console.warn("This student can't take this course")
    }
}

//* Expert Student Inherit Prototype
function ExpertStudent({
    name,
    username,
    mail,
    facebook = undefined,
    instagram = undefined,
    twitter = undefined,
}) {
    Student.call(this, 
        name,
        username,
        mail,
        facebook,
        instagram,
        twitter,
    )
}

ExpertStudent.prototype = Object.create(Student.prototype)
ExpertStudent.prototype.constructor = ExpertStudent

//* Teacher Student Inherit Prototype
function TeacherStudent({
    name,
    username,
    mail,
    facebook = undefined,
    instagram = undefined,
    twitter = undefined,
}) {
    Student.call(this, 
        {name,
        username,
        mail,
        facebook,
        instagram,
        twitter}
    )
}

TeacherStudent.prototype = Object.create(Student.prototype)
TeacherStudent.prototype.constructor = TeacherStudent

TeacherStudent.prototype.addComment = function(contentComment) {
    const newComment = new Comment({
        content: contentComment,
        studentName: this.name,
        studentRole: 'proffessor'
    })

    newComment.postComment()
}

const daniel = new Student({
    name: 'Daniel Merchan',
    email: 'merchanmd@gmail.com',
    username: 'misterdan',
    facebook: undefined,
    instagram: 'misterdan',
    twitter: 'misterdan100'
})

// daniel.approvedCourse('Curso de react')
// daniel.addComment('prototypes are awfull')

// const webProgramingPath = new LearningPath('Escuela de Desarrollo Web')
const pooCourse = new Course({name: 'Programacion Orientada a Objetos con JS', isFree: true})
// const reactCourse = new Course({name: 'Programacion Orientada a Objetos con JS'})

// const polimorfismoClass = new ClassObj('Porlimorfismo en POO')

pooCourse.addClasses(['Abstraction on JS', 'Polimorfismo'])

// // daniel.addComment('Este curso es el mejor')

const miguel = new FreeStudent({name: 'Miguel Gonzales', username: 'miguelon', mail: 'miguelon@gmail.com'})
miguel.addPath('Data Science')
miguel.approvedCourse('Curso de Magia')
// miguel.approvedCourse(pooCourse)

// const freddy = new TeacherStudent({
//     name: 'Freddy Vega',
//     username: 'freddier',
//     email: 'freddier@platzi.com',

// })

const lucasgonza = new TeacherStudent({name: 'Lucas Arnau',username: 'miguelon',mail: 'miguelon@gmail.com'})
console.log(lucasgonza)

lucasgonza.addComment('Probando con lucas')

// freddy.addComment('Lo peor que puede pasar es nada')