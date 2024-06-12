
/*//EJERCICIOS DE LOGICA DE PROGRAMACION//



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

cajero(8000,50)
   
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const tiempoTranscurrido = (fecha = undefined) => {
  if (fecha === undefined) return console.warn('no ingresaste valor')
  if (!(fecha instanceof Date)) return console.warn('no ingresaste fecha valida')

  let diferenciaAnios = new Date().getTime() - fecha.getTime(),// lo que hace en este punto es restar los milisegundos que han pasado con los de nuestra fecha
  convertidiorAnios = 1000 * 60 * 60 * 24 * 365; // convertimos los ms que en js === 1000 a años //
  let aniosTrascurridos = Math.floor((diferenciaAnios /convertidiorAnios)); // y los dividimos para encontrar la diferencia 

  return (Math.sign(aniosTrascurridos) === -1 )
  ? console.log(`faltan ${Math.abs(aniosTrascurridos)} años`)
  : (Math.sign(aniosTrascurridos)=== 1)
    ? console.log(` han trascurrido ${aniosTrascurridos} años desde ${fecha.getFullYear()}`)
    : console.log (`no han trascurrido años`);
}

tiempoTranscurrido(new Date( 2056,4,23));


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



//20) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.


const vocalConsonante = ( fraseBuscar = "") => {
if (!fraseBuscar)return console.log('no ingresaste nada');
if (typeof fraseBuscar !== 'string') return console.warn('no ingresaste valor valido');
let contaroVocales = 0,
contadorConsonantes = 0
let vocales =/[AEIOU]/g;
let consonantes =/[BCDFGHJKLMNPQRSTVWXYZ]/g;
fraseBuscar= fraseBuscar.toUpperCase();

for (let i = 0; i < fraseBuscar.length; i++) {
  let letras = fraseBuscar.charAt(i)+'';// chartAt devuelve el numero que le pasemos en una cadena nueva le colocamos el +'' para que nos devuelva una cadena 
  if (letras.match(vocales)){
    contaroVocales++
  }else if (letras.match(consonantes)){
    contadorConsonantes++
  }
 }
return console.log( ` esta frase tiene ${contaroVocales} vocales y ${contadorConsonantes} consonantes`)
}
vocalConsonante('hola que tal ');

//21) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.


const nombreRequisito = (nombre = '')=>{
  if(!nombre) return console.warn('no agregaste nombre');
  if (typeof nombre !== 'string') return console.warn('no agregaste texto')

  let requisito = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/;
  if(nombre.match(requisito)){
    console.log(`${nombre} es un nombre valido`)
  }else if (nombre.match()) { console.log ('nombre invalido')}

}
nombreRequisito('Sebastian Castano Cadena ')

//22) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const correoValidacion = (correo = "") => {
  if (!correo) return console.warn('no ingresaste un correo')
  if (typeof correo !== 'string') return console.log('parameto no valido')

  let requisitoCorreo = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  // el correo no pude iniciar con pintos//
  //no puede contener espacios dentro del STRING//
  //el email no puede contener expresiones especiales (< *:;)//
  //en medio del correo puede tener puntos andes del @
  //el email puede contener doble dominio como lo seria .com.org //

  if (correo.match(requisitoCorreo)){
    console.log('tu correo es valido')
  }else {console.log ('correo no valido')}
}
correoValidacion('jonmircha@gmail.com')


//23) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].


const elevacionCuadrado = (numerosElevados) => {
  if (!(numerosElevados instanceof Array)) return console.warn ('datos no validos')
  return console.log(`los numeros elevados son al cuadrado ${numerosElevados.map((x)=>Math.pow(x,2))}`)
}

elevacionCuadrado([1,2,3,4,5,8]);

//24) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


const array2 =[1,23,100,-60, -120, 220];

const menor = array2.sort((a,b)=>a-b).slice(0,1); // slice devuelve una copia nueva de array de acuerdo a lo que uno le ingrese, eliminando los demas objetos 
const mayor = array2.sort((a,b)=> a-b).slice(-1)// sort () ordena los elementos de un arreglo (a, b) => a - b esto se utiliza para que se organicen de forma acendente//

console.log (menor);
console.log(mayor);

console.log(` el numero mayor es ${mayor} y el numero menor es ${menor}`)




//25) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const pareImpares = (arregloNumerico) => {

  let pares = arregloNumerico.filter((c)=> c % 2 === 0);
  let impares=arregloNumerico.filter((v)=> v % 2 !== 0);

  return console.log({ pares, impares})
}

pareImpares([1,2,3,4,5,6,7,8,9])

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenNumerico= (arr = undefined)=>{
   
  if (!arr)return console.log('no ingreso valor')
  if (!(arr instanceof Array)) return console.warn('valor ingresado no es un array')

  for( let num of arr){
    if(typeof num !== 'number' ) return console.log('valor no valido');
  }

  return console.log({
    acendente: arr.map(x => x).sort(),
    descendente:arr.map(x => x).sort().reverse()
  });
  
}

ordenNumerico([1,4,3,5,6,2,1,9,9,3]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminDuplicado = ( duplicados= undefined) => {
  if (duplicados === undefined) return console.warn('no agregaste ningun valor')
  if (!(duplicados instanceof  Array)) return console.warn(' no agregaste ningun array')

  return console.log (duplicados.filter((item, index)=> duplicados.indexOf(item) === index))
}

eliminDuplicado(["x", 10, "x", 2, "10", 10, true, true])
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.


const promedioNum = ( promedio= undefined) => {
  if (!promedio) return console.log('no agregaste ningun valor a promediar')
  if (!( promedio instanceof Array)) return console.warn('valor agregado no valido, no es un arreglo')
  if (promedio.length === 1 ) return console.warn('se necesitan mas datos para promediar');
  for (let num of promedio){
        if (typeof num !== 'number'){return console.log ('tipo de dato erroneo')}
      }

  return console.log({
    resultado:promedio.reduce((a,b)=> (a+b)) / promedio.length
  })
}

promedioNum([1,3,4,5,5,5,4,2]);

*/
/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.

  - Valida que el año de estreno sea un número entero de 4 dígitos.

  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.


  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
/*
class Pelicula {
  constructor ({Id, titulo, director, anio , paisOrigen, genero, calificacion}){
    this.Id=Id;
    this.titulo=titulo;
    this.director=director;
    this.anio=anio;
    this.paisOrigen=paisOrigen;
    this.genero=genero;
    this.calificacion=calificacion;

    this.imbdValidacion(Id);
    this.tituloValidacion(titulo);
    this.directorValidacion(director);
    this.anioValidar(anio);
    this.paisValidar(paisOrigen);
    this.generosValidar(genero);
    this.calificacionValidar(calificacion);
  }

  static get listaGeneros (){
    return['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']}

  static generosAceptados (){
    return console.info(`los generos aceptados son ${Pelicula.listaGeneros.join(',')}`)//join lo une en una cadena de texto y se separa por comas//
  }

   validarStrings(propiedad, valor){
    if (!valor) return console.warn(`No agrego ${propiedad} ${valor} esta vacio`);
    if(typeof valor !== 'string') return console.error (`${propiedad} ${valor} no es una cadena de texto`);
    return true;
   }
  imbdValidacion (Id){
    if (this.validarStrings('IMBD',Id)){
      if (!(/^([a-z]{2})([0-9]{7})$/.test(Id))){
        console.warn('IMBD no valido debe tener dos letras y 7 numeros')
      }else{ true}
     
   
  }}

  tituloValidacion (titulo){
      if (this.validarStrings('titulo', titulo)){
      if( (titulo.length > 100)){ console.log('Titulo no valido debe tener menos de 100 caracteres')}
    }
  }

  directorValidacion(director){
    if (this.validarStrings('director', director)){
      if (director.length > 50){ console.log('El nombre del director no es valido')}
    }
  }
  anioValidar (anio){
    if(typeof anio !== 'number') return console.warn('dato no es un numero')
    if (Math.sign(anio)=== -1) return console.warn('los años no pueden ser negativos')
    if (!(Number.isInteger(anio))) return console.warn('debe ser un numero entero')
    if (!(/^([0-9]{4}$)/.test(anio)))return console.warn('el año debe tener 4 digitos')
   
  }

  arregoValidar (propiedad, valor){
    if (!(valor instanceof Array)) return console.warn (`${propiedad} introducido no es un elemento array`)
   if (!valor) return console.warn (`no ingreso ${propiedad}`);
   if (valor.length === 0) return console.warn('no escrbio ningun valor')
   for(let texto of valor){
    if (typeof texto !== 'string') return console.warn(`el ${valor} tiene que ser en forma de texto`)
   }
  return true
  }

  paisValidar (paisOrigen){
    (this.arregoValidar('pais', paisOrigen))
  }
  generosValidar(genero){
   if(this.arregoValidar('generos', genero)){ // se valida que sea un arreglo//
    for (let opciones of genero){ // se utiliza el metdo FOR para recorrer cada una de las opciones de nuestro genero que es un elemento iterable cono lo son las cadenas y los arreglos//
      if(!Pelicula.listaGeneros.includes(opciones)){// en este paso lo que quiere decir es lo siguiente, si en nuestra lista de generos no se incluye la opcion que nosotros colocamos va a mandar el error//
        console.error(`Generos incorrectos ${genero.join(',')}`)
        Pelicula.generosAceptados()
      }
    }
   }
  }

  calificacionValidar (calificacion){
    if (typeof calificacion !== 'number'){
     return console.log ('La calificacion debe ser en numeros')}
    if (!calificacion){return console.log('no agrego ningun valor')}
    return (calificacion < 0 || calificacion > 10  ) 
    ? console.log('El numero no puede ser menor a 0 y mayor a 10')
    : this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica(){
      console.info(`Ficha tecnica: \n Titulo ${this.titulo} \n Director: ${this.director} \n año estrene ${this.anio} \n pais origen ${this.paisOrigen.join('-')} \n genero ${this.genero.join('-')} \n calificacion ${this.calificacion} \n IMDB ${this.Id}`);
    }

  }




const peli = new Pelicula ({
  Id:'as1020303',
  titulo:'La gran pelicula',
  director:'Juan Sebastian Castano',
  anio:2022,
  paisOrigen:['colombia'],
  genero:['Mystery'],
  calificacion:7.453,
})

peli.fichaTecnica();


const pelicuasVarias = [
  {
    Id:'as1220403',
    titulo:'Primera pelicula',
    director:'Primer autor',
    anio:2021,
    paisOrigen:['colombia'],
    genero:['Mystery'],
    calificacion:2.33,
  }, 
  {
    Id:'as1020303',
    titulo:'segunda pelicula',
    director:'Juan Sebastian Castano',
    anio:2022,
    paisOrigen:['colombia'],
    genero:['Mystery'],
    calificacion:7.453,
  },
  {
    Id:'as1020303',
    titulo:'tercer pelicula',
    director:'Juan Sebastian Castano',
    anio:2022,
    paisOrigen:['colombia'],
    genero:['Mystery'],
    calificacion:7.453,
  }
]

pelicuasVarias.forEach(el => {
  new Pelicula(el).fichaTecnica()
  
});


const diferencia = (s1,s2)=> {
  let letrasDiferentes = []

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]){
      letrasDiferentes.push(i)
    }
  }
  return letrasDiferentes
}

console.log (diferencia('abcdefg', 'abcfefy'))


function imprimirInventarioGranja(vacas, pollos) {
  let cadenaVaca = vacas;
  while (cadenaVaca.length < 3) {
    cadenaVaca = "0" + cadenaVaca;
  }
  console.log(`${cadenaVaca} Vacas`);
  let cadenaPollo = pollos;
  while (cadenaPollo.length < 3) {
    cadenaPollo = "0" + cadenaPollo;
  }
  console.log(`${cadenaPollo} Pollos`);
}
imprimirInventarioGranja(25, 11);
*/

//const min = (argumento1, argumento2) => {
  //if (argumento1 < argumento2){
  //  return argumento1;
// } else { return argumento2}
//}
 //console.log(min(20, 10));

//let cadena = 'BOBBBB'
 
//let contador = 0
//for (let i = 0 ; i < cadena.length ; i++) {
 //if (cadena[i] === 'B'){
  // contador++
 //}
//}
//console.log(contador)


function contarBs  (cadena, caracter)  {
  let contador = 0;
    for (let i = 0 ; i < cadena.length ; i++){
      if(cadena[i] === caracter) { contador += 1} 
    }
    return contador;
  }

  function contarCadenas  (string) {
    return contarBs(string , 'B')
  }


  console.log(contarCadenas('BBOB'))
  console.log(contarBs('kakakakaLL', 'L'))



// se quiere rentar un carro si se renta por mas de tres dias el costo al final se reducira en $20 si se renta mas de 7 sera de $50 , realiza el calculo correspondiente
  function rentalCarCost(d) {
    let costoDia = 40;
    let descuentoTercerDia = 20;
    let descuentoSeptimo = 50
    
    if (d < 3){ return (d * costoDia)} 
    else if (d >= 3 && d <= 6){return (d * costoDia) - descuentoTercerDia }
    else {return (d * costoDia) - (descuentoSeptimo) }
  }


  console.log(rentalCarCost(7))

/*Escribe una función range que tome dos argumentos, inicio y fin, y devuelva un array que contenga todos los números desde inicio hasta fin, incluyendo fin.

Luego, escribe una función sum que tome un array de números y devuelva la suma de estos números. Ejecuta el programa de ejemplo y verifica si realmente devuelve 55.

Como asignación adicional, modifica tu función range para que tome un tercer argumento opcional que indique el valor de “paso” utilizado al construir el array. Si no se proporciona un paso, los elementos deberían aumentar en incrementos de uno, correspondiendo al comportamiento anterior. La llamada a la función range(1, 10, 2) debería devolver [1, 3, 5, 7, 9]. Asegúrate de que esto también funcione con valores de paso negativos, de modo que range(5, 2, -1) produzca [5, 4, 3, 2].*/



let resultado = ''
let min = 5
let max = 15
while (min <= max){
  resultado += min ;
  min++;
}

console.log(resultado)



const range = (min, max )=>{
  let resultadoArray = []
  while (min <= max){
    resultadoArray += min ;
    min++;
  }
  return resultadoArray.split('')
}
console.log(range(1,10))


