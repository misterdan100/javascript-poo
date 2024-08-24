class Person{
    name: string | undefined
    age: number | string | undefined
    constructor(name?: string | undefined, age?: number | undefined) {
        this.name = name || 'unknown'
        this.age = age || 'unknown'
    }

    saludar(): void {
        console.log(`Hey, I'm ${this.name} with ${this.age} years old`)
    }
}

const daniel = new Person()
daniel.saludar()

console.log(typeof(Person))