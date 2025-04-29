//operaciones con arreglos
function operacionesConArreglos01(){
    var frutas = ["manzana", "pera", "uva", "naranja", "sandia"];
    //agregando un elemento al final del arreglo
    frutas.push("mango");
    console.log("agregando un elemento al final del arreglo");
    console.log(frutas);
    //agregando un elemento al inicio del arreglo   
    frutas.unshift("kiwi");
    console.log("agregando un elemento al inicio del arreglo");
    console.log(frutas);
    //eliminando un elemento del final del arreglo
    frutas.pop();
    console.log("eliminando un elemento del final del arreglo");
    console.log(frutas);
    //eliminando un elemento del inicio del arreglo
    frutas.shift();
    console.log("eliminando un elemento del inicio del arreglo");
    console.log(frutas);
}