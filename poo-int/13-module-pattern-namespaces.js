// function to send an error
function requiredParam(param) {
    throw new Error(param + ' es obligatorio!')
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
        learningPaths,
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
        // readName() {
        //     return private._name
        // },
        // changeName(newName) {
        //     private._name = newName
        // },

    }

    // //* protect function readName
    // Object.defineProperty(public, 'readName', {
    //     writable: false,
    //     configurable: false,
    // })
    
    // //* protect function changeName
    // Object.defineProperty(public, 'changeName', {
    //     writable: false,
    //     configurable: false,
    // })
    
    // return new object
    return public
}

const juan = createStudent({
    name: 'juan',
    age: 29,
    mail: 'daniel@gmail.com',
    twitter: 'misterdan'
})


juan.name = 'Juancho'
console.log(juan)

// juan.changeName('dario')

console.log(juan.name)
console.log(Object.getOwnPropertyDescriptors(juan))