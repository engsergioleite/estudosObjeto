const cliente = {
    nome: "Sérgio",
    idade: 32,
    CPF: "888.000.999-88",
    email: "sergio@gmail.com",
};

console.log(`O nome do cliente é ${cliente.nome} e esse cliente tem ${cliente.idade} anos.`)
console.log(`Os 3 primeiros digitos do CPF do cliente são: ${cliente.CPF.substring(0, 3)}`) //uso da substring para filtrar apenas 3 digitos iniciais


