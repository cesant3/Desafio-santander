var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerca = [10, -5, 3, 1];
var alunosDaQuarta = [8, 2, 3, 0];
var alunosDaQuinta = [10, 2, 0, 0];
var alunosDaSexta = [-8, 2, 3, 0];

//var alunosDaSemana = [alunosDaSegunda, alunosDaTerca, alunosDaQuarta, alunosDaQuinta, alunosDaSexta];

function acontece(alunosDaSegunda, quantidadeMinima) {
    var cont = 0;
    for(let i = 0; i < alunosDaSegunda.length; i++) {
        if(alunosDaSegunda[i] <= 0) cont++;
    }
    if(cont >= quantidadeMinima) {
            return true;
    }else {
        return false;
    }
}

function aberturas(teste = [], quantidadeMinima) {
    var resultado = [];
    for(let i = 0; i < teste.length; i++){
        resultado[i] = acontece(teste[i], quantidadeMinima);
    }
    return resultado;
}

console.log(acontece(alunosDaSegunda, 2));
console.log(acontece(alunosDaSegunda, 3));
console.log(acontece(alunosDaSegunda, 0));
console.log(aberturas([alunosDaSegunda, alunosDaTerca, alunosDaSexta], 2));