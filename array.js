/* Creando un array
Puedes crear un array en JavaScript declarando una variable y asignándole valores entre corchetes [].*/

let frutas = ["Manzana", "Uva", "Naranja"];

 /* Accediendo a los valores Los elementos de un array se acceden mediante índices numéricos, que comienzan en 0.
 0 manzana
 1 uva
 1 naranaja */

 console.log(frutas[0]); // Salida: "Manzana"
 console.log(frutas[2]); // Salida: "Naranja"

 /* Añadiendo nuevos elementos
Para agregar un elemento al final del array, puedes usar el método push. */ 

frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]

 /* Eliminando el último elemento
Para eliminar el último elemento, puedes usar el método pop. */

frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]
