const threeMultiples = (multipleNumber) => {
    const start = 1
    const limit = 1000000
    const result = []

    for( let i = start; i<=limit; i++) {
        if(i%multipleNumber === 0) {
            result.push(i)
        }
    }

    return result
}
console.time('threeMultiples1')
console.log(threeMultiples(3))
console.timeEnd('threeMultiples1')

// refactor function
const threeMultiples2 = (multipleNumber) => {
    const result = []
    let counter = 1

    while(counter !== 0) {
        if(multipleNumber * counter <= 1000000) {
            result.push(multipleNumber*counter)
            counter++
        } else {
            counter = 0
        }
    }

    return result
}

console.time('threeMultiples2')
console.log(threeMultiples2(3))
console.timeEnd('threeMultiples2')

// chatgpt solution
function filterMultiplesOfThree() {
    // Crear un arreglo con los números del 1 al 100
    const numbers = Array.from({ length: 1000000 }, (_, i) => i + 1);

    // Filtrar los números que son múltiplos de 3
    const multiplesOfThree = numbers.filter(number => number % 3 === 0);

    return multiplesOfThree;
}

// Llamar a la función y mostrar los múltiplos de 3
console.time('filterMultiplesOfThree')
console.log(filterMultiplesOfThree())
console.timeEnd('filterMultiplesOfThree')
