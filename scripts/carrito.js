//Se obtiene carrito del Storage y si no existe se declara vacío
const carrito = JSON.parse(localStorage.getItem("Carrito Storage")) || [];

function agregarAlCarrito(evento){
    // alert("Se agrego al carrito")
    let codigo = evento.target.parentNode.children[0].id;
    let productoSeleccionado= productos.find((prod)=> prod.codigo == codigo );
    carrito.push(productoSeleccionado);
    console.log(productoSeleccionado);
    guardarCarrito();
    dibujarCarrito();
 }
function dibujarCarrito(){
    document.getElementById("contador-carrito").innerHTML=carrito.length;
}
 //Storage
 function guardarCarrito(){
 //Local Storage y JSON
     localStorage.setItem("Carrito Storage", JSON.stringify(carrito));
 }

 //EVENTO Click

let boton = document.getElementsByClassName("btn btn-primary");
let numBoton = boton.length;

for (let i = 0; i < numBoton; i++) {
    boton[i].addEventListener('click', agregarAlCarrito, false);
}
dibujarCarrito();