function videoPlay(id) {
    const urlSecreta = "https://platziscreto/" + id
    console.log(`Se esta reproduciento desde la url ${urlSecreta}`)
}

function videoStop() {
    const urlSecreta = "https://platziscreto/" + id
    console.log(`Puasamos la url ${urlSecreta}`)
}

export class PlatziClass {
    constructor({
        name,
        videoID,

    }) {
        this.name = name
        this.videoId = videoID
    }

    reproducir() {
        videoPlay(this.videoId)
    }
    
    pausar() {
        videoStop(this.videoId)
    }
}

const nombre = 'nuevo curso de programacion'

console.log(nombre[0].toUpperCase())