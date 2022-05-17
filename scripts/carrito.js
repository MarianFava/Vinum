//Se obtiene carrito del Storage y si no existe se declara vacío
//Simplificando el código con el operador OR
let carrito = JSON.parse(localStorage.getItem("Carrito Storage")) || [];

function agregarAlCarrito(evento){

    let codigo = evento.target.id;

    let productoSeleccionado= productos.find((prod)=> prod.codigo == codigo );
    let indExistenteCarrito = carrito.findIndex((producto)=> producto.codigo == codigo );

    if (indExistenteCarrito == -1) {
        carrito.push({...productoSeleccionado,cantidad: 1});
    }else{
        carrito[indExistenteCarrito].cantidad++;
    }
    guardarCarrito();
    dibujarCarrito();
//Implementando libreria Toastify
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
    let cantidadProductos = 0;
     //Sumatoria de cantidades de productos agregados
    carrito.forEach(itemCarrito =>{
        cantidadProductos = cantidadProductos + itemCarrito.cantidad;
    });
    //Actualizacion de contador de productos de carrito
    document.getElementById("contador-carrito").innerHTML=cantidadProductos;
    //Se obtiene cuerpo de modal
    let cuerpoModal = document.getElementById("cuerpoModal");
    cuerpoModal.innerHTML="";
    //Se crea el contenedor donde irá del detalle del carrito en el modal
    let container = document.createElement("div");
    container.classList.add("container");

    //Titulo de la lista de productos en el carrito
    container.innerHTML = `<div class="row">
    <div class="col">
    </div>
    <div class="col">
      Producto
    </div>
    <div class="col">
      Cantidad
    </div>
    <div class="col">
      P.Unitario
    </div>
    <div class="col">
      Sub Total
    </div>
  </div>`;
  let total = 0;
  //Se recorre el array de productos del carrito y se dibuja en el cuerpo del modal
  carrito.forEach((itemCarrito,index) => {
    total = total+itemCarrito.cantidad * itemCarrito.precio;
    container.innerHTML = container.innerHTML +
        `<hr><div class="row">
            <div class="col">
                <img class="imgCarrito" src="${itemCarrito.imagen}"/>
            </div>
        <div class="col">
            ${itemCarrito.marca}-${itemCarrito.variedad}
        </div>
        <div class="col">
            <a href="#" id="${index}" class="btn btn-outline-info btn-sm btnInc">+</a>
            ${itemCarrito.cantidad}
            <a href="#" id="${index}" class="btn btn-outline-info btn-sm btnDec">-</a>
        </div>
        <div class="col">$
            ${itemCarrito.precio}
        </div>
        <div class="col">$
            ${itemCarrito.cantidad * itemCarrito.precio}
        </div>
        </div>`;
    });

    container.innerHTML = container.innerHTML +
        `<hr>
        <div class="row ">
            <div class="col-8">TOTAL: </div>
            <div class="col">$${total}</div>
        </div>`;

    //Se incorpora el contenedor con el detalle en el cuerpo del modal
    cuerpoModal.appendChild(container);

    //Ahora que ya está dibujado el contenedor dentro del cuerpo del modal
    //Se capturan los eventos de incremento y decremento de cantidad de cada producto
    //EVENTO INCREMENTAR
    document.querySelectorAll('.btnInc').forEach(boton=>{
        boton.addEventListener('click',(e)=>{
            carrito[e.target.id].cantidad++;
            dibujarCarrito();
            guardarCarrito();
        })
    });

    //EVENTO DECREMENTAR
    document.querySelectorAll('.btnDec').forEach(boton=>{
        boton.addEventListener('click',(e)=>{
            carrito[e.target.id].cantidad--;
            if(carrito[e.target.id].cantidad == 0){
                carrito.splice(e.target.id,1);
            }
            dibujarCarrito();
            guardarCarrito();
        })
    });

}
//Storage
function guardarCarrito(){
//Local Storage y JSON
    localStorage.setItem("Carrito Storage", JSON.stringify(carrito));
}

dibujarCarrito();

//EVENTO CLICK EN CARRITO
document.getElementById("btnConfirmar").addEventListener('click',()=>{
    if (carrito.length>0){
        Swal.fire({
            title: 'Elegi el medio de pago',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Debito/Credito',
            denyButtonText: `Mercado Pago`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Gracias por tu compra!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Gracias por tu compra', '', 'info')
            }
          })
        carrito.splice(0,carrito.length);
        dibujarCarrito();
        guardarCarrito();
    }
});

