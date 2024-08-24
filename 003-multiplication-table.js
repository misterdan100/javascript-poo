const multiplicationTable = (a, x) => {
    const result = []

    for(let i = 0; i <= x; i++) {
        if(i !== 5) {
            result.push(`${a} x ${i} = ${a*i}`)
        }
    }

    return result
}

console.log(multiplicationTable(5, 10))