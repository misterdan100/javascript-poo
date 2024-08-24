"use strict";
class Person {
    constructor(name, age) {
        this.name = name || 'unknown';
        this.age = age || 'unknown';
    }
    saludar() {
        console.log(`Hey, I'm ${this.name} with ${this.age} years old`);
    }
}
const daniel = new Person();
daniel.saludar();
console.log(typeof (Person));
