const dadosCliente = {
    nome: "Sérgio",
    idade: "40",
    email: "eng.sergio.leite@gmail.com",
    telefone: ["9191111-2233", "9191888-3344"], //add array como propriedade
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo) { // this (este) é uma expressao para falar desde objeto
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor;
            console.log(`Saldo suficiente, pagamento realizado de ${valor} e seu novo saldo é: ${this.saldo}`)
        }
    }
}

dadosCliente.efetuaPagamento(150)
