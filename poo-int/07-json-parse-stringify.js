const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    },
    f: function() {
        console.log('saludando!!!')
    },
    g: 'hola'
}
//* deep copy of a object with independent reference
const obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.b = 'bbbbb'

console.log(obj2)