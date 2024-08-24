// print pair number until limit number
const evenNumLimit = (limit) => {

    for(let i = 0; i<=limit; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }
}

// evenNumLimit(10)

// print even numbers from start to limit range
const evenNumRange = (a, b) => {
    let result = []

    for(let i = a; i<=b; i++) {
        if(i%2 === 0) {
            result.push(i)
        }
    }

    return result
}

console.log(evenNumRange(9, 26))

