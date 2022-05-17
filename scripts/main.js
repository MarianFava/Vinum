//Implementando librerías(Sweet Alert)
Swal.fire({
    title: 'Bienvenido a Vinum',
    text: "Es mayor de 18 años?",
    color:'#f50792',
    background: '#383838',
    showCancelButton: true,
    confirmButtonColor: '#40DFEF',
    cancelButtonColor: '#FF6363',
    cancelButtonText:'No, soy menor',
    confirmButtonText: 'Sí, lo soy'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Podés empezar a comprar'
      )
    }else{
        Swal.fire(
            'Volvé cuando cumplas 18'
        )
    }
  })
//Declaración del array productos
let  productos = [];
//Declaración de la clase
class Producto {
    constructor (codigo, marca, tipo, variedad, origen, precio, imagen){
        this.codigo = codigo;
        this.marca = marca;
        this.tipo = tipo;
        this.variedad = variedad;
        this.origen = origen;
        this.precio = precio;
        this.imagen = imagen;
    }
}

//Llamada asincrónica
fetch("/data/productos.json")
    .then(response => response.json())
    .then(json => {
        productos = [...json];
        //Se recorre el array productos con For y se filtra por tipo de bebida utilizando metodo filter
        for(const dato of productos.filter(producto => producto.tipo == "Vino")){
            dibujarCard(dato, "catalogoVinos");
        }
        for(const dato of productos.filter(producto => producto.tipo == "Gin")){
            dibujarCard(dato, "catalogoGin");
        }
        for(const dato of productos.filter(producto => producto.tipo == "Whiskey")){
            dibujarCard(dato, "catalogoWhiskey");
        }
    });

//Acceso condicional a un objeto
console.log(productos?.calificacion || "La calificación no esta definida");
//Desestructuración de un objeto
const {tipo, variedad} = productos;

//Variable global que contiene el total de productos incorporados al carrito
var totalCarrito = 0;

//Esta función permite obtener el precio a partir del código del producto
function obtenerPrecioProducto(codigoProducto) {
    let precio = 0;
    //Se busca el precio del producto ingresado mediante su código usando Método Find
    let prodSeleccionado = productos.find(producto => producto.codigo == codigoProducto);
    if (prodSeleccionado) {
        precio = prodSeleccionado.precio;

        console.log(prodSeleccionado);
    }
    return precio;
}

//Creación de cards manipulando el DOM

function dibujarCard(productos, catalogo){
    let seccionProductos = document.getElementById(catalogo);

    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<img
    src="${productos.imagen}"
    class="card-img-top"
    alt="${productos.marca}"/>
    <div class="card-body">
    <h5  class="card-title">${productos.marca.toUpperCase()}</h5>
    <p class="card-text"> Tipo:${productos.tipo} <br/> Origen:${productos.origen}
    <br/> Variedad:${productos.variedad} <br/> <span class="precio"> Precio:$ ${productos.precio} </span> </p>
    <a href="#" id="${productos.codigo}" class="btn btn-primary">Agregar al carrito</a> </div>
    `;
    seccionProductos.appendChild(card);
    document.getElementById(productos.codigo).addEventListener('click', agregarAlCarrito, false);
}


