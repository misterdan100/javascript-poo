const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    }
}

const obj2 = {...obj1} // shallow copy
for(prop in obj1) {
    obj2[prop] = obj1[prop] 
}

obj2.c.d = 'dddd'
console.log(obj2)

//* Shallow copy
const obj3 = Object.create(obj1)
obj3.a = 'aaaaaa' // obj1 is not modificated

console.log(obj1)


