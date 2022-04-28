/*process.argv.forEach((index, val) => {
    console.log(`${index}:${val}`);
});*/

//console.log("Titulo del proceso: ", process.title);//
//console.log("so: ", process.platform);
//console.log("version de node: ", process.version);

//const name = require('readline').createInterface({
 //   input:process.stdin,
  //  output:process.stdout
//});

//name.question("Cual es su nombre? ", name=>{
 //   console.log(`Bienvenido ${name}`);
//});
const {sum, colors}= require("./functions.js");

const result=sum(2,3);
console.log("El resultado es: ",result);

colors.forEach((color)=>{
    console.count(color);
});