/* Ejercicios para conceptos basicos  */
///////* TEMA 1. Variables y Tipos de Datos  *////////

/* (EJERCICIO 1) Crea variables para guardar tu nombre, edad y si te gusta programar (booleano).*/

let nombre = "Jimena";
let edad = 20;
let te_gustar_programar = true;

/* (EJERCICIO 2) Muestra un texto en consola que use todas esas variables en una sola frase.*/
if (te_gustar_programar == true) {
    programar = "te gusta programar";
} else {
    programar = "no te gusta programar";
}
console.log("Tu nombre es " + nombre + ". Tienes " + edad + " años y " + programar);

/* (EJERCICIO 3) Muestra en consola el tipo de cada variable.  */
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof te_gustar_programar);
console.log("\n");

////////* TEMA 2. Operadores *////////
/* (EJERCICIO 1) Calcula el área de un rectángulo dados su base y altura. */
let base = 5;
let altura = 5;

let area = (base * altura) / 2;
console.log(area);
console.log("\n");

/* (EJERCICIO 2) Convierte grados Celsius a Fahren9heit. */
let grados_celsius = 25;
let grados_fahrenheit = (grados_celsius * (9/5)) + 32;
console.log(grados_fahrenheit)
console.log("\n");

/*(EJERCICIO 3) Suma, resta, multiplica y divide dos números ingresados por el usuario. */

/// Usamos el Readline module disponible en Node JS para solicitar al usuario datos especificos
// paso 1. create interface for I/O
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// paso 2. ask the question and handle the response 
readline.question ('Elige un numero ', (numero1_input) => {
    let numero1 = Number(numero1_input);

    readline.question('Elige otro numero ', (numero2_input) => {
        let numero2 = Number(numero2_input);

        let suma = numero1 + numero2;
        let resta = numero1 - numero2;
        let multiplicacion = numero1 * numero2;
        let division = numero1 / numero2;

        console.log(suma);
        console.log(resta);
        console.log(multiplicacion);
        console.log(division);

        // Close the interface when done
        readline.close();
    })
})

// Handle application exit
readline.on('close', () => {
    console.log('chauuu!');
    process.exit(0);
});

//// Esta es otra forma de resolver desde la consola de un html pero como estoy probando ejecutando con node entonces prompt noe xiste y tira un ReferenceError
// let numero1_input = prompt("Elige un numero: ");
// let numero2_input = prompt("Elige otro numero: ");

// let numero1 = Number(numero1_input);
// let numero2 = Number(numero2_input);

// let suma = numero1 + numero2;
// let resta = numero1 - numero2;
// let multiplicacion = numero1 * numero2;
// let division = numero1 / numero2;

// console.log(suma);
// console.log(resta);
// console.log(multiplicacion);
// console.log(division);
// console.log("\n");
////

////////* TEMA 3. Condicionales *////////
/* (EJERCICIO 1) Calcula el área de un rectángulo dados su base y altura. */
/* (EJERCICIO 2) Pide un número y determina si es positivo, negativo o cero. */
/* (EJERCICIO 3) Sistema de notas: según un valor numérico, mostrar si es “Aprobado con excelencia”, “Aprobado” o “Reprobado”. */