// exercicio 1
let nome = "domm";
let idade = 14;
let EstudaProgramacao = true;
const saudacao = `olá,${nome}!`;

console.log(
    `${saudacao}, vi que você colocou que tem ${idade} anos, você está certo disso?, só mais uma pergunta, você estuda programação? ${EstudaProgramacao}`,
);
// exercicio 2
function exercicio_2() {
    const pessoas = 1;
    if (pessoas > 6) {
        console.log("precisa de uma mesa grande pra porra ou se não junta");
    } else if (pessoas <= 6 && pessoas >= 3) {
        console.log("mesa média");
    }
    else{
        console.log ("mesa pequena")
    }
}
    exercicio_2()
// exercicio 3
const cardapio = ["moqueca", "bisteca de porco", "camarão", "salada de fruta"];
for (comida in cardapio){
     console.log(`${+comida + 1}. ${cardapio[comida]}`);
}
