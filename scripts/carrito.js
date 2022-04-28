//Se obtiene carrito del Storage y si no existe se declara vacío
//Simplificando el código con el operador OR
const carrito = JSON.parse(localStorage.getItem("Carrito Storage")) || [];

function agregarAlCarrito(evento){
    // alert("Se agrego al carrito")
    let codigo = evento.target.parentNode.children[0].id;
    let productoSeleccionado= productos.find((prod)=> prod.codigo == codigo );
    let encontrarProducto = carrito.find((producto)=> producto.codigo == codigo );
    //console.log(encontrarProducto);
    if (!encontrarProducto) {
        carrito.push({...productoSeleccionado,cantidad: 1});
    }else{
        const idFiltrados = carrito.filter(item => item.codigo != codigo)
        let nuevaCantidad = encontrarProducto.cantidad + 1;
        encontrarProducto ={...encontrarProducto, cantidad: nuevaCantidad};
        for (let i = 0; i <= carrito.length; i++) {
             carrito.pop();
        }
        carrito.push(...idFiltrados);
        carrito.push(encontrarProducto);
    }
    console.log(carrito);
    guardarCarrito();
    dibujarCarrito();
    Toastify({
        text: "Se agregó al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #f50792, #f478f8)",
        },
    }).showToast();

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


