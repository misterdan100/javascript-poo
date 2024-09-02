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
    
    // return new object
    return {
        name,
        age,
        mail,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        approvedCourses,
        learningPaths
    }
}

const juan = createStudent({
    name: 'juan',
    age: 29,
    // mail: 'daniel@gmail.com',
    twitter: 'misterdan'
})
