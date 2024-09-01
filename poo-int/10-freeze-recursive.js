import { type } from "os";

const juan = {
    name: "Juanito",
    approvedCourses: ["Curso 1", "Curso 2"],
    caracteristicas: {
        age: 18,
        colorCabello: 'Negro',
        gustos: {
            musica: ['rock', 'punk', 'ska'],
            peliculas: ['drama', 'horros', 'comedia'],
        },
    },
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

export function deepFreeze(obj) {
    // Tu código aquí 👈
    for(let prop in obj) {
        if(typeof(obj[prop]) === 'object' && !Array.isArray(obj[prop])) {
            console.log(obj[prop])
            obj[prop] = deepFreeze(obj[prop])
            Object.freeze(obj[prop])
        }
    }
    return Object.freeze(obj)
}
// Object.freeze(juan)

const result = deepFreeze(juan)
console.log(Object.isFrozen(result.caracteristicas))
console.log(result)