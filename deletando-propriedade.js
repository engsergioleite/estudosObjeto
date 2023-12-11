const objPersonagem = {
    nome: "Ganalf",
    classe: "mago", 
    nivel: "20",
    aliado: {
        nome: "saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

console.log(objPersonagem)

//deletando uma propriedade

delete objPersonagem.aliado
delete objPersonagem["status"]
console.log(objPersonagem)
