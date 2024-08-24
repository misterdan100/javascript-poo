// random number
// divide 2
// double
// square root

const randomPlus = () => {
    const random = Math.floor(Math.random() * 101)

    const divide = random / 2
    const double = random * 2
    const square = Math.sqrt(random)

    return `Number ${random}, half = ${divide}, double = ${double}, and square = ${square.toFixed(2)}`
}

console.log(randomPlus())