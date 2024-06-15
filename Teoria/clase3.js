  let tiempo = setTimeout(()=>{
  console.log('helo');
}, 4000) // es el tiempo que se demora en aparecer//


let tiempoIntervalo = setInterval(()=>{
  console.log('set interval')
}, 3000)

clearTimeout(tiempo); // sirve para parar el tiempo del setTimeout
//console.log('tiempo parado')
clearInterval(tiempoIntervalo) // sirve para parar el tiempo del intervalo
//console.log('tiempo dos parado')

//CONCEPTOS 
//JS lenguaje de un solo hilo single thread  lo que significa que tiene sincronia y asincronia , lo que quiere decir es lo siguiente las funciones tendran un orden en el momento que sean impresas , lo que quiere decir que el orden depende de la declaracion de las funciones 
