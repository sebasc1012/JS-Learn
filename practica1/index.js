
//EJERCICIOS DE LOGICA DE PROGRAMACION//



//1. Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10./

const numeroCadena = (cadena) => console.log (cadena.length); // nos da la longitud//

numeroCadena('hola mundo');// en este caso nos da 10 por que se incluye el espacio//




//2. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, miFuncion("Hola Mundo", 4) devolverá "Hola".//


const recorteCaracteres = (recorte) => console.log (recorte.slice(0, 5));
          //para este ejercicio utilizamos la propiedad slince que nos permite recortar una cadena de texto y generar una nueva por lo que los numero son el inicio y el final de la parte que queremos//

      recorteCaracteres('hello world'); 




// 3. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']...//

  const cadenaArray = ('hola que tal esto ahora sera un arreglo');
  function stringArray (string){
    console.log(string.split(' '))
  }

  stringArray(cadenaArray);




//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.// 


  const textoRepetir = (texto = "", veces = undefined) =>{
    if(!texto)console.log('no coloco ningun texto');

    if (veces === undefined)console.log('no coloco el numero de veces');

    if (veces <= 0 )console.log('el numero no puede ser ni cero ni negativo');
    
    for (let i = 1; i <= veces; i++)console.log(`${texto}, ${i}`); 
  }
  textoRepetir("hola",4) // para este punto nos dara hola repetido 4 veces 





//5. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".//

  const invertirCadena = (invertir = "") => (!invertir) ? console.log('no colocaste nada ') : console.log(invertir.split('').reverse().join('')) 
          // para esta funcion utilizamos tres metodos el primero split pasa la cadena a array y los separa , despues reverse cambia el array de sentido y finalmente join lo devuelve a tipo cadena//
  invertirCadena('Hola Mundo');
  




// 6. Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.// 

  const palabraRepetida = (cadena = '', palabra = '')=> {
    if ( cadena === undefined){console.warn('no ingreso ningun texto')}
    if (palabra === undefined){console.warn('no ingreso la palabra a buscar ')};

    let i = 0;
    let contador = 0 

    while (i !== -1){
      i =cadena.indexOf(palabra,i)
      if( i !== -1){
        i ++;
        contador ++;
      }
    }
    return console.log(`la palabra ${palabra} se reite ${contador} veces`)
  }

  palabraRepetida('hola mundo adios mundo', 'mundo')




//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palíndromoFrase = (frace)=> {
  
  let re = /[^A-Za-z0-9]/g;
  let lowFrace = frace.toLowerCase().replace(re, '');
 let revertFrase = lowFrace.split('').reverse().join('')
  return lowFrace === revertFrase;
}

console.log(palíndromoFrase('eye'));

// segunda forma de resolver 

const polidormo = (fraseUno = '') => {
  if (fraseUno === undefined){ console.warn('no ingreso valor')}
  fraseUno = fraseUno.toLowerCase();
  let fraseAlrevez = fraseUno.split('').reverse().join('');
  return (fraseUno === fraseAlrevez) ? true : false
}
console.log (polidormo('salas'));





//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarTexto = (eliminar) => eliminar.replace(/xyz/gm, '');

console.log (eliminarTexto("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));


const elimiarCaracteres = ( frase = '', elemento = "")=> {
  (!frase) ? console.warn('no hay frase')
    : (!elemento)
      ? console.warn('no hay elemento')
      : console.log ( frase.replace(new RegExp(elemento, 'ig'),'')) // en este caso se coloca como parametro para eliminar el elemento que se coloque y el i significa que no importa si es mayuscula o minuscula y el g que sea global //
      }

      elimiarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")



//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = (aleatorio) => {
  let min = 501;
  let max = 600;
  aleatorio = Math.random()*(max - min)+ min ;
  console.log(Math.round(aleatorio))
}


numeroAleatorio();


//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),  miFuncion(2002) devolverá true.//


 const capicuaNumero = (numero = 0) => {

   if (!numero) console.warn('no agregaste numero')

   if (typeof numero !== 'number') console.error(' lo que escogiste no fue un numero');

  numero = numero.toString()
  let numeroAlrevez = numero.split('').reverse().join('')
   return (numero === numeroAlrevez) ? true : false
 }
 
 console.log(capicuaNumero(2002)); // true


//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// los dumeros factoriales son por ejemplo (5) 5*4  20*3  60*2 120*1//
const factorialNumero = (num = undefined) => { 
  if (!num) return console.log('no colocaste ningun parametro');
  if (typeof num !== 'number') return console.log('colocaste un parametro invalido')
  if (num === 0) return console.log('no se le puede sacar factorial a 0')
  if (Math.sign(num) === -1 ) return console.log('no pueden ser numeros negativos')

let factorial = 1

for (let i = num; i > 1 ; i-- ){
  factorial = factorial * i
}
 return console.log(`este es el resultado de ${num} cuando es factorial = ${factorial}`);
}
   factorialNumero(10);



   //12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true//


   const numeroPirmo =(primo = undefined) => {
    if (!primo) return console.warn('no ingresaste ningun valor');
    if (typeof primo !== 'number') return console.warn(' no es un numero');
    if (Math.sign(primo) === -1 ) return console.warn('no se pueden numeros negativos');

    for (let x = 2 ; x < primo ; x++){
        if (primo % x === 0){
          return console.log(false);
          break;
        }
        return console.log( primo !== 1) ;
    }
   
   }

   numeroPirmo(57);


   //13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.//


   const numeroParImpar = (parImpar= undefined) => {
    if (!parImpar) return console.warn('no colocaste numero');
    if ( typeof parImpar !== 'number') return console.warn('no es un numero');

    if ( parImpar % 2 === 0 ){
      return console.log ('par')
    } else{ return console.log ('impar')}

   }

   numeroParImpar(16);


   // 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.


   //Grados Fahrenheit = (grados centígrados × 9/5) +32.
   //Grados centígrados = (grados Fahrenheit − 32) × 5/9.


   const temperaturaConversion = (temperatura = undefined, unidad = undefined) =>{
    if (temperatura === undefined )return console.warn('no ingreso los valores')
    if (unidad === undefined) return console.warn('no ingreso los valores')
    if (typeof temperatura !== 'number')return console.warn('no ingreso el numero de temperatura correctamente');
    if (typeof unidad !== 'string') return console.warn('no ingreso la unidad de medida correctamente');

     if(unidad === 'F'){
    return console.log(`${temperatura} F son = ${Math.round((temperatura - 32) * 5/9)} C`);
  }
   if (unidad === 'C') {
    
    return console.log (`${temperatura} C son =  ${Math.round((temperatura * 9/5) + 32)} F `);
  }

   }
   temperaturaConversion(0,'F')




   // 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.//


   const binarioDecimal = (binario = undefined , base = undefined) => {
    if (binario === undefined) return console.warn('no ingresaste ningun numero');
    if (base === undefined) return console.warn('no ingresaste ningun numero');
    if (typeof binario !== 'number') return console.warn('no colocaste un numero')
    if (typeof base !== 'number') return console.warn('no colocaste un numero')

    if (base === 2) return console.log(`El ${binario} en base ${base} es igual ${parseInt(binario, base)} en base 10`)// para comvertir a decimal;
    if (base === 10) return console.log( `${binario} en base ${base} es igual  ${binario.toString(2)} en base 2`)// para comverir decimal en vinario
   }

   binarioDecimal(53,10)

   //16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

   const cajero = (costo = undefined, descuento = 0) =>{
    if (!costo) return console.warn('no ingresaste el valor del producto')
    if ( typeof costo !== 'number') return console.log('el costo ingresado no es valido')
    if (!descuento) return console.warn('tu producto no tiene descuento')
    if ( typeof descuento !== 'number') return console.log('el costo ingresado no es valido')

    return console.log(`su producto tiene un valor de ${costo} y un descuento de ${descuento}% para un total de $${Math.abs(((descuento / 100)* costo)- costo)}`);
   }

cajero(8000,0)
   
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).



// 18 Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar.

//Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" para los números que son divisibles solo por uno de esos).//


for (let i = 1; i <= 100 ; i++) {

  if (i % 3 === 0  && i % 5 === 0) console.log('FizzBuzz');
  else if(i % 3 === 0 )console.log('Fizz');
  else if (i % 5 === 0) console.log ('Buzz');
  else {console.log(i);}  
}




// 19 realiza una funcion donde de un nombre salga las iniciales ejemplo ' sebastian castano' = S.C//
const abbrevName = (name) =>{
  
  console.log(name.match(/\b\w/g).join('.').toUpperCase());
}
abbrevName('sam harris');