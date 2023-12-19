const dados = require("./cliente-formato-json.json")
console.log(dados)
console.log(dados["nome"])
console.log(typeof dados)


// transformando o objeto em string

const objetoEmString = JSON.stringify(dados)

console.log(objetoEmString)

console.log(typeof objetoEmString)

// transformando string que era objeto, em objeto novamente

const clienteObjeto = JSON.parse(objetoEmString)
console.log(clienteObjeto)
console.log(typeof clienteObjeto)