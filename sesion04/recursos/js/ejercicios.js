//jercicios de arreglos con javascript
//Ejercicio 1
//Crear un arreglo con 10 números enteros y mostrar la suma de todos los elementos del arreglo.
function ejercicio01(){
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }   
    console.log("La suma de los elementos del arreglo es: " + suma);
}

//Ejercicio 2   
//Crear un arreglo con 10 números enteros y mostrar el número mayor del arreglo.
function ejercicio02(){
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mayor = numeros2[0];    
for (let i = 1; i < numeros2.length; i++) {
    if (numeros2[i] > mayor) {
        mayor = numeros2[i];
    }
}
console.log("El número mayor del arreglo es: " + mayor);

}
//Ejercicio 3
//Crear un arreglo con 10 números enteros y mostrar el número menor del arreglo.

let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Ejercicio 4
//Crear un arreglo con 10 números enteros y mostrar el promedio de los elementos del arreglo.
let numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Ejercicio 5
//Crear un arreglo con 10 números enteros y mostrar la cantidad de números pares e impares del arreglo.
let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Ejercicio 6
//Crear un arreglo con 10 números enteros y mostrar los números primos del arreglo.
let numeros6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Ejercicio 7
//Crear un arreglo con 10 números enteros y mostrar los números en orden ascendente.
let numeros7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosOrdenados = numeros7.sort((a, b) => a - b);
console.log("Los números en orden ascendente son: " + numerosOrdenados);
//Ejercicio 8
//Crear un arreglo con 10 números enteros y mostrar los números en orden descendente.
let numeros8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosOrdenadosDesc = numeros8.sort((a, b) => b - a);
console.log("Los números en orden descendente son: " + numerosOrdenadosDesc);

//Ejercicio 9
//Crear un arreglo con 10 números enteros y mostrar los números en orden aleatorio.
let numeros9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosAleatorios = numeros9.sort(() => Math.random() - 0.5);
console.log("Los números en orden aleatorio son: " + numerosAleatorios);
//Ejercicio 10
//Crear un arreglo con 10 números enteros y mostrar los números en orden inverso.
let numeros10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosInversos = numeros10.reverse();
console.log("Los números en orden inverso son: " + numerosInversos);

