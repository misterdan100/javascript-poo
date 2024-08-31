// how to work memory on Javascript
// how to copy objects on JS breaking up the chain

const juanita = {
    age: 15,
    mail: 'juanita@gmail.com'
}

const nath = juanita
nath.age = 20

//! both variables point to the same object
console.log(juanita) // { age: 20, mail: 'juanita@gmail.com' }
console.log(nath) // { age: 20, mail: 'juanita@gmail.com' }


// Stack memory stores small data: booleans, string, numbers
const name = 'daniel'
const age = 29
const single = false

// Head memory store great data: objects, functions, arrays
const hoobies = [ 'piano', 'running']
const piano = {size: 88, brand: 'yamaha'}
