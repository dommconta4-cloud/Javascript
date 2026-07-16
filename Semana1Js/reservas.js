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


let ReservasDoDia = [2,4,7,1,8,5]
    ReservasDoDia.forEach((quantidade, index) => {
        console.log ((index+1), "-", +quantidade)
        
    
    });