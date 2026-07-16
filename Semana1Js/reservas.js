// sistema de verificar qual mesa corresponde ao numero de pessoas de uma reserva
// mesa 1: pequena, de 1 até 2 pessoas
// mesa 2: média, de 3 a 5 pessoas
// mesa 3: grande, de 6 a 7 pessoas
// mesa 4: gigante, de 8 a 10 pessoas

// o que eu vou fazer?
// vou pegar uma variavel, dentro dela coloca um array
// essa array vai representar o numero de pessoas e pra qual reserva elas vão ser destinadas
// com um if e else, eu faço a tomada de decisão se alguem vai pra pequena, media, etc
// com um loop na mesma função do array, eu organizo ela em linhas, cada item vai ser numerado
// 2 mesas pequenas, 2 médias, 1 grande e 1 gigante

//  
let ReservasDoDia = [1,2,4,5,7,8]
    ReservasDoDia.forEach((quantidade, index) => {
        console.log ((index+1), "-", +quantidade)
        
        if (quantidade >=8){
            console.log ("mesa gigante reservada")
        }
        else if (quantidade >=6){
            console.log ("mesa grande reservada!")
        }
        else if (quantidade >=3){
            console.log ("mesa média reservada")
        }
        else {
            console.log ("mesa pequena")
        }
    });
    // das 6 mesas, vou fazer com que o programa conte quantas mesas foram pequenas, medias, etc