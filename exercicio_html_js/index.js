const campoA = document.getElementById("campo-a")
const campoB = document.getElementById("campo-b")
const msgErro = document.getElementById("msg-erro")
const msgSucesso = document.getElementById("msg-sucesso")
const btnValida = document.getElementById("btn-valida")
const form = document.getElementById("formulario")

let formValido = false

form.addEventListener('submit', e => {
    e.preventDefault()
})

function validacao(campo) {
    return campo > campoA.value
}

campoB.addEventListener("keyup", function(e) {
    formValido = validacao(e.target.value)

    if(formValido == false) {
        msgErro.style.display = "block"
        btnValida.disabled = true
        btnValida.style.cursor = "default"
    } else {
        msgErro.style.display = "none"
        btnValida.disabled = false
        btnValida.style.cursor = "pointer"
    }
})

function formMsgSucesso() {
    msgSucesso.style.display = "block"
    campoA.value = ""
    campoB.value = ""
    setTimeout(() => msgSucesso.style.display = "none", "3000")
}