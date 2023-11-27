function Instrumento(nome) {
    this.nome = nome
}

function Guitarra(nome, corpo) {
    Instrumento.call(this, nome)

    this.corpo = corpo
}

function Teclado(nome, teclas) {
    Instrumento.call(this, nome)

    this.teclas = teclas
}

const guitarra1 = new Guitarra('Fender', 'sólida')
const guitarra2 = new Guitarra('Gibson', 'semi-acústica')
const teclado1 = new Teclado('Korg', 37)

console.log(guitarra1)
console.log(guitarra2)
console.log(teclado1)