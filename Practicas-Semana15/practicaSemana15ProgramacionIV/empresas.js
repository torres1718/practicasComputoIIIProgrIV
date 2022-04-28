const{empresas}= require("./functions.js");


console.log("Empresas que usan Node.js: ");
console.log("");
empresas.forEach(empresa => {
    console.log(empresa);
});