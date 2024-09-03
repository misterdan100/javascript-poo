/**
 * Duck typing is a concept in object-oriented programming where the type or the class of an object is determined by the presence of certain methods or properties, rather than its explicit type declaration. It allows objects of different types to be treated as the same type if they have the same set of methods or properties.
 *
 * In the context of object-oriented programming, duck typing is often used to achieve polymorphism, where different objects can be used interchangeably based on their behavior rather than their explicit type.
 *
 * Duck typing is commonly associated with dynamically typed languages like JavaScript, where the type of an object can change at runtime based on its behavior.
 */

function isArray(arr) {
    return Array.isArray(arr)
}

// function to send an error
function requiredParam(param) {
    throw new Error(param + ' es obligatorio!')
}

// function create learning path
function createLearningPaths({
    name = requiredParam('name'),
    courses = [],
}) {
    const private = {
        '_name': name,
        '_courses': courses,
    }

    const public = {
        get name() {
            return private._name
        },
        set name(newName) {
            if(newName.trim() !== '') {
                private._name = newName
            } else {
                throw new Error('Nombre no valido!')
            }
        },
        get courses() {
            return private._courses
        },

    }

    return public
}

// function to create objects, recieve object as a param
function createStudent({
    name = requiredParam('name'), // required param
    mail = requiredParam('mail'), // required param
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [], // Array as a default value
    learningPaths = [], // Array as a default value
} = {}) {

    const private = {
        '_name': name,
        '_learningPaths': learningPaths,
    }

    const public = {
        age,
        mail,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        approvedCourses,

        // getter and setter to name
        get name() {
            return private._name
        },
        set name(newName) {
            if(newName.trim() !== '') {
                private._name = newName
            } else {
                throw new Error('Nombre no valido!')
            }
        },

        // getter and setter to learning Paths
        get learningPaths() {
            return private._learningPaths
        },

        set learningPaths(newLP) {
            if(!newLP.name) {
                console.warn('Tu LP no tiene nombre.')
                return
            }
            
            if(!newLP.courses) {
                console.warn('Tu LP no tiene courses.')
                return
            }
            
            if(!isArray(newLP.courses)) {
                console.warn('Tu LP no es una lista de cursos.')
                return
            }

            private._learningPaths.push(newLP)
        }


    }

    return public
}

const juan = createStudent({
    name: 'juan',
    age: 29,
    mail: 'daniel@gmail.com',
    twitter: 'misterdan'
})

const lucasPath = createLearningPaths({name: 'lucas film', courses: ['lucas', 'film']})

juan.learningPaths = lucasPath

console.log(juan.learningPaths)