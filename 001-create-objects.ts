class Person{
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    saludar(): void {
        console.log(`Hey, I'm ${this.name} with ${this.age} years old`)
    }
}

const daniel = new Person('Daniel', 29)
daniel.saludar()