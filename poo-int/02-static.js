const daniel = {
    name: 'Daniel Merchan',
    age: 29,
    approvedCourses: ['Curso Web'],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

console.log(Object.keys(daniel))
Object.defineProperty(daniel, 'pruebaNASA', {
    value: 'extraterrestres',
    writable: true,
    enumerable: false,
    configurable: true,
})
console.log(Object.getOwnPropertyNames(daniel))
console.log(Object.entries(daniel))


// Seal static method
Object.seal(daniel)
daniel.name = 'carlos'
console.log(Object.getOwnPropertyDescriptors(daniel))
console.log(Object.entries(daniel))

// Freeze
Object.freeze(daniel)