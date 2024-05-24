
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
