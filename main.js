function getComputerChoice(){//Numero ALeatorio
    const opcion = ["piedra","tijera","papel"];
    let numAleatorio= Math.floor(Math.random()* 3);
    return (opcion[numAleatorio]);
}

function playRound(playerSelection, computerSelection){//Quien gana quien pierde
    if(computerSelection === playerSelection){
        return `Empate los dos escogieron ${computerSelection}` ;

    }else if(computerSelection == "piedra" && playerSelection == "tijera"){
        return `Pierdes, ${computerSelection} vence a ${playerSelection} ` ;

    }else if(computerSelection == "papel" && playerSelection == "piedra"){
        return `Pierdes, ${computerSelection} vence a ${playerSelection} ` ;

    }else if(computerSelection =="tijera" && playerSelection =="papel"){
        return `Pierdes, ${computerSelection} vence a ${playerSelection} ` ;

    }else if(computerSelection == "piedra" && playerSelection == "papel"){
        return `Ganas, ${playerSelection} vence a ${computerSelection} ` ;

    }else if(computerSelection == "papel" && playerSelection =="tijera"){
        return `Ganas, ${playerSelection} vence a ${computerSelection} ` ;

    }else if(computerSelection =="tijera" && playerSelection =="piedra"){
        return `Ganas, ${playerSelection} vence a ${computerSelection} ` ;

    }
}

const computerSelection = getComputerChoice();
var perdidas = 0,ganadas = 0;

function resultadoSuma(valor){
    if(valor.indexOf("Pierdes") !== -1 ){
        perdidas ++;
    }else if(valor.indexOf("Ganas") !== -1 ){
        ganadas ++;
    }

}

function resultadoFinal(){
    if(ganadas == perdidas){
        alert("Han quedado en un empate");
    }else if(perdidas > ganadas){
        alert("Has perdio el juego");
    }else{
        alert("Has ganado el juego");
    }
}

function game(){//juego

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Digite piedra,papel o tijera").toLowerCase();
        let resultado = playRound(playerSelection, computerSelection);
        resultadoSuma(resultado);
        alert(resultado);
    }
    resultadoFinal()
}


game();