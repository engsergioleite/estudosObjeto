const encontrarClientes = require("./exercitando-clientes.json")

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

//const encontrado = encontrar(encontrarClientes, "nome", "Kirbi") // passando os parametros para a função (objeto, chave e valor da chave)

const encontrado2 = encontrar(encontrarClientes, "telefone", "47933865848")

console.log(encontrado2)