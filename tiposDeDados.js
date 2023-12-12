const dadosCliente = {
    nome: "Sérgio",
    idade: "40",
    telefone: ["9191111-2233", "9191888-3344"] //add array como propriedade

}

//criando o objeto endereço como um array
dadosCliente["endereco"] = [{
rua: "Alcindo Cacela",
numero: 89,
apartamento: true, //valor booleano
complemento: "apto 1000"
}]

//adicionando um objeto dentro do array endereço
dadosCliente.endereco.push({
    rua: "nazaré",
    numero: 1000,
    apartamento: false, //valor booleano
    complemento: "",   
})

// console.log(dadosCliente.endereco)   // imprimindo o endereço

//filtrando apenas os que sao apartamentos (true)

const dadosClientesFiltrados = dadosCliente.endereco.filter((endereco) =>
    endereco.apartamento === true
)

console.log(dadosClientesFiltrados)

