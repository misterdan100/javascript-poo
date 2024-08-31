function recursiva(num) {
    if(num < 5) {
        return recursiva(num + 1)
    } else {
        return 5
    }
}



const obj1 = {
    a: 'aa',
    b: 'bb',
    c: {
        d: 'dd',
        e: {
            f: 'ff',
            g: 'gg'
        }
    },

    saludar() {
        console.log('saludando')
    }
}

function copyObject(originObj) {
    const result = {}
    for(current in originObj) {
        // let tempValue
        if(typeof(originObj[current]) === 'object') {
            result[current] = copyObject(originObj[current])
        } else {
            result[current] = originObj[current]
        }
    }
    return result
}

const obj2 = copyObject(obj1)
obj2.c.d = 'dedo'
console.log(obj2)
console.log(obj1)

obj2.saludar = function saludar() {
    console.log('hola')
}

obj1.saludar()
obj2.saludar()