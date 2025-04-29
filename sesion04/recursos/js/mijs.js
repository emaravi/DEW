
function ejemploArreglos01(){
    var edad1 = 20;
    var edad2 = 30;
    var edad3 = 40;
    var edad4 = 50;
    var edad5 = 60;
    //mostrando las edades
    console.log("mostrando edades de variables individuales");
    console.log(edad1);
    console.log(edad2);
    console.log(edad3);
    console.log(edad4);
    console.log(edad5);
    //ahora lo haremos con arreglos
    var edades = [20,30,40,50,60,23,43,12,67,23,67,32,54];
    //mostrando las edades usando for
    console.log("mostrando edades de un arreglo usando for");
    for (var i = 0; i < edades.length; i++){
        console.log(edades[i]);
    }
}
function ejemploArreglos02(){
    var edades = [20,30,40,50,60,23,43,12,67,23,67,32,54];
    //mostrando las edades usando forEach
    console.log("mostrando edades de un arreglo usando forEach");
    edades.forEach(function(edad){
        console.log(edad);
    });
} 

function ejemploArreglos03(){
    var edades = [20,30,40,50,60,23,43,12,67,23,67,32,54];
    //mostrando las edades usando forEach con arrow function
    console.log("mostrando edades de un arreglo usando forEach con arrow function");
    edades.forEach(edad => console.log(edad));
}

