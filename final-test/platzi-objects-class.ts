type StudentPropsTypes = {
    name: string
    username: string
    mail: string
    instagram?: string | undefined
    twitter?: string | undefined
    facebook?: string | undefined
}
class Student {
    //* types
    protected name: string
    username: string
    private mail: string
    instagram: string | undefined
    twitter: string | undefined
    facebook: string | undefined
    approvedCourses: object[]
    learningPaths: string[]

    constructor({
        name,
        username,
        mail,
        instagram = undefined,
        twitter = undefined,
        facebook = undefined,
    }: StudentPropsTypes) {
        this.name = name
        this.username = username
        this.mail = mail
        this.instagram = instagram
        this.facebook = facebook
        this.twitter = twitter
        this.approvedCourses = []
        this.learningPaths = []
    }

    addCourse(course: object): void {
        this.approvedCourses.push(course)
        console.log(`Course added correctly!`)
    }

    addPath(newPath: string): void {
        this.learningPaths.push(newPath)
        console.log('Learning Path added correctly!')
    }

    addComment(contentComment: string): void {
        const newComment = new Comment1({
            content: contentComment,
            studentName: this.name,
        })
        
        newComment.postComment()
    }

}

//* Comment Class
type Comment1Props = {
    content: string
    studentName: string
    studentRole?: string
    likes?: number
}
class Comment1 {
    content: Comment1Props['content']
    studentName: Comment1Props['studentName']
    studentRole: Comment1Props['studentRole']
    likes: Comment1Props['likes']

    constructor({
        content,
        studentName,
        studentRole = 'student',
        likes = 0
    }: Comment1Props) {
        this.content = content,
        this.studentName = studentName,
        this.studentRole = studentRole,
        this.likes = likes
    }

    postComment(): void {
        console.log(`${this.studentName} (${this.studentRole}) has commented:`)
        console.log(this.content)
        console.log(`${this.likes} likes`)
    }
}


//* Classes class
type ClassesPropsType = {
    name: string
}

class ClassesObj {
    private _name: string
    private _videoID: string

    constructor({
        name
    }: ClassesPropsType) {
        this._name = name
        this._videoID = 'http://platzi.com/' + new Date().getTime()
    }

    get name(): string {
        console.log(this._name)
        return this._name
    }

    playVideo(): void {
        console.log(`Playing ${this._name} class`)
        console.log(this._videoID)
    }

    stopVideo(): void {
        console.log(`Stopped ${this._name} class`)
    }

}

//* Course class
type CoursePropsType = {
    name: string
    classes: object[]
    isFree: boolean
    lang: string
}
class Course {
    //types
    private _name: CoursePropsType['name']
    classes: CoursePropsType['classes']
    isFree: CoursePropsType['isFree']
    lang: CoursePropsType['lang']

    constructor({
        name,
        classes = [],
        isFree = false,
        lang = 'spanish'
    }: CoursePropsType) {
        this._name = name
        this.classes = classes
        this.isFree = isFree
        this.lang = lang
    }

    get name(): void {
        console.log(this._name)
        return this.name
    }

    set name(newName: string) {
        if(newName.trim() !== '') {
            this._name = newName
        } else {
            console.error('New name is invalid')
        }
    }

    addClasses(newClass: ClassesObj) {
        this.classes.push(newClass)
        console.log('Classes added correctly!')
    }
    
}


//* FreeStudent inherit Class
class FreeStudent extends Student {

    constructor(props: StudentPropsTypes) {
        super(props)
    }

    addCourse(course: Course) {
        if(course.isFree === true) {
            this.approvedCourses.push(course)
            console.log(`Free course added correctly!`)
        } else {
            console.warn("This student can't take this course")
        }
    }
}

//* BasicStudent inherited Class
class BasicStudent extends Student {
    constructor(props: StudentPropsTypes) {
        super(props)
    }

    addCourse(course: Course): void {
        if(course.lang !== 'english') {
            this.addCourse(course)
        } else {
            console.warn("Basic Students can't take english courses")
        }
    }
}

//* ExpertStudent inherited Class
class ExpertStudent extends Student{
    constructor(props: StudentPropsTypes) {
        super(props)
    }
}

//* TeacherStudent inherited Class
class TeacherStudent extends ExpertStudent{
    admin: boolean

    constructor(props: StudentPropsTypes) {
        super(props)
        this.admin = true
    }

    get getName(): string {
        return this.name
    }

    addComment(contentComment: string): void {
        const newComment = new Comment1({
            content: contentComment,
            studentName: this.name,
            studentRole: 'proffessor'
        })

        newComment.postComment()
    }


}

const daniel1 = new FreeStudent({name: 'Daniel Merchan', username: 'misterdan', mail: 'dan@gmail.com'})

console.log(daniel1)

const freddyVega = new TeacherStudent({
    name: 'Freddy Vega',
    mail: 'freddy@gmail.com',
    username: 'freddier',
})
console.log(freddyVega)

freddyVega.addComment('Que curso tan bacano')