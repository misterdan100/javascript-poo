function deepCopyObject(subject) {
    // check if param is an object
    function isObject(subject) {
        return typeof subject === 'object'
    }

    // check if param is an Array
    function isArray(subject) {
        return Array.isArray(subject)
    }

    let copySubject // this is the temp value

    const subjectIsObject = isObject(subject) // is object?
    const subjectIsArray = isArray(subject) // is array?

    if(subjectIsArray) {         // if it's array
        copySubject = []         // set temp. subject as an empty array to put every value
    } else if(subjectIsObject) { // if it's object
        copySubject = {}         // set temp. subject as an object to put every property
    } else {                     // if it isn't neither array nor object
        return subject           // is a simple value, this can be copy directly
    }

    // function continue if param is either object or array
    for(key in subject) { // check every value or property of the object or array
        const keyIsObject = isObject(subject[key])  // check if current value or property is an object or array

        if(keyIsObject) {  // if it's an object
            copySubject[key] = deepCopyObject(subject[key])  // call the function recursively to return a copy of the value object
        } else { // if it's neither object nor array
            if(subjectIsArray) { // if it's an array
                copySubject.push(subject[key]) // push the current element in the temp array
            } else { // if it isn't neither object or array
                copySubject[key] = subject[key]  // set the current value normaly in the temp result
            }
        }
    }

    // return copySuject
    return copySubject
}

//* literal template to create new objects
// this object works as a class
const studentBase = {
    name: undefined,
    mail: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
    }
}

const daniel = deepCopyObject(studentBase) 
Object.seal(daniel)
Object.defineProperty(daniel, 'name', {
    value: 'daniel',
    configurable: false, // avoid delete property
    writable: true, // avoid redefine property
    enumerable: true, // allow property being listed
})

console.log(daniel)

