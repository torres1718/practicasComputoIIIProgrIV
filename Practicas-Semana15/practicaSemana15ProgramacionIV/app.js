//escriba un programa el cual reciba la edad argumento y determine si es mayor de edad o no.
 
//const edad =require('readline').createInterface({
 //   input: process.stdin,
  //  output: process.stdout
   // });
//edad.question("ingrese su edad: ", edad => {
  //  if (edad >= 18) {
    //    console.log('es mayor de edad');
    //} else {
      //  console.log('es menor de edad');
    //}
    //edad.close();
//});


//crear un programa que me solicite 2 numeros y permita realizar 4 operaciones basicas, el usuario debe seleccionar la operacion a realizar
//suma, resta, multiplicacion, division
const datos = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

    datos.question("Ingrese el numero 1: ", (numberOne) => {
    datos.question("Ingrese el numero 2: ", (numberTwo) => {
    datos.question("Selecciona una operacion 1-Suma 2-Resta 3-Multiplicación 4-División: ", (operation) => {
         const {suma, resta, multiplicacion, division}= require("./functions.js");
            if(operation==="1"){
                console.log(suma(numberOne, numberTwo))
            } else if (operation==="2"){
                console.log(resta(numberOne, numberTwo))
            } else if (operation==="3"){
                console.log(multiplicacion(numberOne, numberTwo))
            } else if (operation==="4"){
                console.log(division(numberOne, numberTwo))
            } else {
                console.log("Operación inválida")
            }
        })
    })
})





 //En un archivo cree dos arreglos el primero con dos departamentos y el segundo comunidades, deberá exportar ambos elementos y leerlos en otro archivo.



 
