export const citaFull = [
  {
    "autor": "Friedrich Nietzsche",
    "texto": "Lo que no te mata, te hace más fuerte"
  },
  {
    "autor": "Séneca",
    "texto": "Hace falta toda una vida para aprender a vivir"
  },
  {
    "autor": "John Lennon",
    "texto": "Haz el amor y no la guerra"
  },
  {
    "autor": "Malcolm X",
    "texto": "La Educación es el pasaporte hacia el futuro, el mañana pertenece a aquellos que se preparan para él en el día de hoy"
  },
  {
    "autor": "Oscar Wilde",
    "texto": "La mejor manera de librarse de la tentación es caer en ella"
  },
  {
    "autor": "Galileo Galilei",
    "texto": "La duda es la madre de la invención"
  },
  {
    "autor": "Johann Wolfgang von Goethe",
    "texto": "El único hombre que no se equivoca es el que nunca hace nada"
  },
  {
    "autor": "Maquiavelo",
    "texto": "Vale más hacer y arrepentirse, que no hacer y arrepentirse"
  },
  {
    "autor": "Charles Baudelaire",
    "texto": "Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse"
  },
  {
    "autor": "Groucho Marx",
    "texto": "Estos son mis principios y si no te gustan, tengo otros"
  },
  {
    "autor": "Mario Benedetti",
    "texto": "La perfección es una pulida colección de errores"
  },
  {
    "autor": "Jorge Luis Borges",
    "texto": "La duda es uno de los nombres de la inteligencia"
  },
  {
    "autor": "Gabriel García Márquez",
    "texto": "La impresionó tanto su enorme desnudez tarabiscoteada que sintió el impulso de retroceder"
  },
  {
    "autor": "Maya Angelou",
    "texto": "El prejuicio es una carga que confunde el pasado, amenaza el futuro y hace inaccesible el presente"
  },
  {
    "autor": "Frida Kahlo",
    "texto": "Amurallar el propio sentimiento es arriesgarte a que te devore desde el interior"
  },
  {
    "autor": "Antoine de Saint-Exupéry",
    "texto": "Caminando en línea recta no puede uno llegar muy lejos"
  },
  {
    "autor": "John Green",
    "texto": "Que cosa tan traicionera pensar que una persona es más que una persona"
  },
  {
    "autor": "Pablo Neruda",
    "texto": "Muere lentamente quien no viaja, quien no oye música, quien no encuentra gracia en sí mismo"
  },
  {
    "autor": "Maya Angelou",
    "texto": "Si siempre intentas ser normal nunca descubrirás lo extraordinario que puedes llegar a ser"
  },
  {
    "autor": "Frida Kahlo",
    "texto": "La mujer que lee almacena su belleza para la vejez"
  }
];


// fibonacci no recursivo, mas funcional devuelve un array
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(10));

//recursividad

function recursividadFibo(n) {
  if (n < 2) {
    return n;
  } else {
    return recursividadFibo(n - 1) + recursividadFibo(n - 2);
  }
}

console.log(recursividadFibo(10));

//- Programar un algoritmo recursivo que calcule el factorial de un número.

function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

//División por restas sucesivas:
function dividir(dividendo, divisor) {
  if (divisor === 0) {
    return undefined;
  } else {
    return dividendo / divisor - (dividendo % divisor);
  }
}

console.log(dividir(9, 5));

//Inversión de un número:

function invertir(numero) {
  const numeroAbsoluto = Math.abs(numero); // Obtener el valor absoluto del número
  const numeroComoCadena = numeroAbsoluto.toString(); // Convertir a cadena para facilitar la manipulación
  const digitosInvertidos = numeroComoCadena.split("").reverse().join(""); // Invertir los dígitos
  const resultado = parseInt(digitosInvertidos); // Aplicar el signo original al número invertido
  return resultado;
}

console.log(invertir(123456));

//Suma de los dígitos de un número:

function sumaDigitos(numero) {
  let suma = 0;
  while (numero > 0) {
    suma += numero % 10;
    numero = Math.floor(numero / 10);
  }
  return suma;
}

console.log(sumaDigitos(555));

// Método Ruso para multiplicación:

function multiplicar(a, b) {
  if (b === 0) {
    return 0;
  } else {
    return a + multiplicar(a, b - 1);
  }
}

console.log(multiplicar(5, 5));

//Suma de elementos de un arreglo:

function sumaElementos(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

console.log(sumaElementos([1, 5, 6, 5]));

// encontrar el numero mas grande de un vector
function encontrarMaximo(vector) {
  if (vector.length === 1) {
    return vector[0];
  } else {
    return Math.max(vector[0], encontrarMaximo(vector.slice(1)));
  }
}

const vector = [3, 8, 1, 6, 12, 5, 9];
const resultado = encontrarMaximo(vector);
console.log(resultado);
/// Multiplicar cada elemento por su posición en el vector

const array = [2, 4, 6, 8, 10];

// Usando la función map
const multiplic = array.map((elemento, posicion) => elemento * posicion);

console.log(multiplic);


let cadenainvert = cadena => {
  let resultadoo = cadena.split("").reverse().join("")
  return resultadoo
}

console.log(cadenainvert("freeCodeCamp"))

//programa que devuelva el número de veces que aparece una letra en una cadena.

let programa = (cadena, letra) => {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) === letra) {
      contador++;
    }
  }
  return contador;
}

console.log(programa("enzoeee", "e"))