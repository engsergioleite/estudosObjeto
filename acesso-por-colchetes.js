const cliente = {
    nome: "Sérgio",
    idade: 32,
    CPF: "888.000.999-88",
    email: "sergio@gmail.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e esse cliente tem ${cliente["idade"]} anos.`)

const chaves = ["nome", "idade", "CPF", "email", ""];

chaves.forEach ( (chaves) => {

    console.log(`O Cliente ${chaves} tem o valor ${cliente[chaves]}`)
})