let cat = prompt('Ingrese su categoría: ');
let precio = 100000;

//Con condiciones.
cat = parseInt(cat);
if (!isNaN(cat)){
    function categoria(){
        if (cat === 1){
            precio = (precio - (precio * 0.3));
            return precio;
        } else if (cat === 2){
            precio = (precio - (precio * 0.2));
            return precio;
        } else if (cat === 3){
            precio = (precio - (precio * 0.1));
            return precio;
        } else {
            console.log('Ingrese una categoria válida por favor.');
        }
    }   

    console.log(`Su precio total es: ${categoria()}`);
} else {
    console.log('Ingrese un número');
}


// Con switch
 switch (categoria) {
    case 1:
        precio = (precio - (precio * 0.3));
        break;
    
    case 2: 
        precio = (precio - (precio * 0.2));
        break;
    
    case 3:
        precio = (precio - (precio * 0.1));
        break;
    
    case 4:
        precio = (precio - (precio * 0));
        break;
    
    default:
        precio = precio;
        break;
}