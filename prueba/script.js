//Generales 
let nombre = prompt('ingrese su nombre');
let id = prompt('ingrese su id');

//Precios
let plMate = 2000;
let plSoci = 5000;
let plFisc = 4000;

let precio = 0;

//Cantidades
let clMate = 0;
let clSoci = 0;
let clFisc = 0;


clMate = prompt('Ingrese la cantidad de libros de matemáticas');
if (clMate > 0){
    precio += clMate * plMate
} else {
    console.log('-');
}

clSoci = prompt('Ingrese la cantidad de libros de estudios sociales');
if (clSoci > 0){
    precio += clSoci * plSoci
} else {
    console.log('-');
}

clFisc = prompt('Ingrese la cantidad de libros de fisica');
if (clFisc > 0){
    precio += clFisc * plFisc
} else {
    console.log('-');
}

let clibrs = (parseInt(clMate) + parseInt(clSoci) + parseInt(clFisc));

console.log(`Cantidad total de libros: ${clibrs}`);
console.log(`El total a pagar es: ${precio}`);