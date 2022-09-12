let conta = 0;
let resposta = prompt("Deseja comer uma coxinha?");

while (resposta == "S"){
    conta += 2.5;
    resposta = prompt("Deseja comer mais uma coxinha?");
    if (resposta != "S" && resposta != "N"){
        alert("Apenas S ou N são respostas válidas!");
        resposta = "S";
        conta -= 2.5;
    }
}

console.log(`R$ ${conta}`);