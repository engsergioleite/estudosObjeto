const pessoa = {
    nome: "Sérgio",
    profissão: "engenheiro",
}

console.log(pessoa.nome)
console.log(pessoa.profissão)

// pedindo um dado que não existe nas pripriedades

// console.log(pessoa.telefone) // não existe, retornara undefined

// adicionado o dado telefone nas propriedades do array

pessoa.telefone = "91 91111-2222"

console.log(pessoa.telefone)

pessoa.nome = "Sérgio Fonseca Leite Junior"

console.log(pessoa)
