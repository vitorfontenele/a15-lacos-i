let conta = 0;
let resposta = prompt("Deseja comer uma coxinha [S/N]?").toUpperCase();
let preco = 2.5;

while (resposta !== "N") {
  if (resposta === "S") {
    conta += preco;
    resposta = prompt("Deseja comer mais uma coxinha [S/N]?").toUpperCase();
  } else {
    alert("Apenas S ou N são respostas válidas!");
    resposta = prompt("Deseja comer mais uma coxinha [S/N]?").toUpperCase();
  }
}

console.log(`R$ ${conta}`);
