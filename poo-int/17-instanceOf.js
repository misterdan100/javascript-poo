function isArray(arr) {
    return Array.isArray(arr)
}

// function to send an error
function requiredParam(param) {
    throw new Error(param + ' es obligatorio!')
}

// function create learning path
function LearningPaths({
    name = requiredParam('name'),
    courses = [],
}) {
    this.name = name
    this.courses = courses

    // const private = {
    //     '_name': name,
    //     '_courses': courses,
    // }

    // const public = {
    //     get name() {
    //         return private._name
    //     },
    //     set name(newName) {
    //         if(newName.trim() !== '') {
    //             private._name = newName
    //         } else {
    //             throw new Error('Nombre no valido!')
    //         }
    //     },
    //     get courses() {
    //         return private._courses
    //     },

    // }

    // return public
}

// function to create objects, recieve object as a param
function Student({
    name = requiredParam('name'), // required param
    mail = requiredParam('mail'), // required param
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [], // Array as a default value
    learningPaths = [], // Array as a default value
} = {}) {

    if(!isArray(learningPaths)) {
        console.warn("learning path no es un array")
        return
    }

    for(temp of learningPaths) {
        if(!(temp instanceof LearningPaths)) {
            console.warn('Learning path no es verdadero!')
            return
        }
    }

    this.name = name
    this.mail = mail
    this.age = age
    this.learningPaths = learningPaths
    this.approvedCourses = approvedCourses
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    }

    // const private = {
    //     '_name': name,
    //     '_learningPaths': learningPaths,
    // }

    // const public = {
    //     age,
    //     mail,
    //     socialMedia: {
    //         twitter,
    //         instagram,
    //         facebook,
    //     },
    //     approvedCourses,

    //     // getter and setter to name
    //     get name() {
    //         return private._name
    //     },
    //     set name(newName) {
    //         if(newName.trim() !== '') {
    //             private._name = newName
    //         } else {
    //             throw new Error('Nombre no valido!')
    //         }
    //     },

    //     // getter and setter to learning Paths
    //     get learningPaths() {
    //         return private._learningPaths
    //     },

    //     set learningPaths(newLP) {
    //         if(!newLP.name) {
    //             console.warn('Tu LP no tiene nombre.')
    //             return
    //         }
            
    //         if(!newLP.courses) {
    //             console.warn('Tu LP no tiene courses.')
    //             return
    //         }
            
    //         if(!isArray(newLP.courses)) {
    //             console.warn('Tu LP no es una lista de cursos.')
    //             return
    //         }

    //         private._learningPaths.push(newLP)
    //     }


    // }

    // return public


}
// const lucasPathFake = {name: 'Escuela de Desarrollo Web', courses: ['lucas', 'film']}
const lucasPath = new LearningPaths({name: 'Escuela de Desarrollo Web', courses: ['lucas', 'film']})

const juan = new Student({
    name: 'juan',
    age: 29,
    mail: 'daniel@gmail.com',
    twitter: 'misterdan',
    learningPaths: [lucasPath]
})


// juan.learningPaths = lucasPathFake

console.log(juan)