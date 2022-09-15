/*
const miTitulo = 
document.querySelector('h2');
miTitulo.textContent = '!Hola Mundo!';

let nombre;         // declarar variable
nombre = 'Bob';     // asignar valor a la variable
// let nombre = 'Bob';    en una sola linea

 // COMENTARIOS
 // Comentario 
 /* comentario varias lineas*/
  
 /*  OPERADORES
     +  Suma 
        o concatena 2 variables 
    ===   compara igual a 
    !   !==   cambia true  por false y viceversa */

  /*  CONDICIONALES 
    if   
    else
    */

//let miTitulo = 'Joan';        Alerta 
/*
if (nombre === 'Bob') {
    alert('¡Sí, amo el helado de chocolate!');
} else {
    alert('Awwww, pero mi favorito es el de chocolate...');
}*/

/*   Ejemplo de FUNCION function - que muestra en consola
function multiplica(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
multiplica(4, 7);
multiplica(20,20);
multiplica(0.5,3);
*/
// Funcion cambio de Imagen  Dom Api 

let miImagen = document.querySelector('img');
miImagen.onclick = function(){
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/domestic.jpg') {
        miImagen.setAttribute('src','images/imagen2.jpg')
    } else {
    miImagen.setAttribute('src', 'images/domestic.jpg');
    }
}  

// Funcion button 
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h2');
/*
function establecerNombreUsuario() {
    let miNombre = prompt('por favor, ingrese su nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozila es genial,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    establecerNombreUsuario();
}
else {
    let nombreAlmacenado= localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozila es genial,' + nombreAlmacenado;
}  */  /*
miBoton.onclick = function() {
    establecerNombreUsuario();
}
// Promt cuadro de dialogo en pantalla 
// recibe nombre y cambia el titulo de la pagina  */
function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
}
miBoton.onclick = function () {
    establecerNombreUsuario();
}

