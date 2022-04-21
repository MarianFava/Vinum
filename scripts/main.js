//Implementando librerías(Sweet Alert)
Swal.fire({
    title: 'Bienvenido a Vinum',
    text: "Es mayor de 18 años?",
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
const productos = [];
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
//Con el método push incorporamos los nuevos objetos de tipo "Producto" al Array productos
productos.push(new Producto("V001","Chateau Cordillera","Vino","Malbec","Montecaseros,Mendoza",1220,"./media/ChateuMalbec.jpeg"));
productos.push(new Producto("V002","Chateau Cordillera","Vino","Cabernet","Montecaseros,Mendoza",1220,"./media/ChateuCabSauv.jpeg"));
productos.push(new Producto("V003","Caminante","Vino","Chardonnay","Valle de Uco",820,"./media/CaminanteChardonnay.jpeg"));
productos.push(new Producto("V004","Azul","Vino","Malbec","Agua Amarga,Tupungato",610,"./media/AzulMalbec.jpeg"));
productos.push(new Producto("V005","Acordeon","Vino","Malbec","Gualtallary,Mendoza",820,"./media/AcordeonMalbec.jpeg"));
productos.push(new Producto("V006","Chateau Cordillera","Vino","Cabernet Franc","Mendoza",1220,"./media/ChateuCabFranc.jpeg"));
productos.push(new Producto("V007","Caminante","Vino","Cabernet Franc","Mendoza",820,"./media/CaminanteCabFranc.jpeg"));
productos.push(new Producto("V008","Caminante","Vino","Malbec","Mendoza",830,"./media/CaminanteMalbec.jpeg"));
productos.push(new Producto("G001","Aconcagua","Gin","Dry","Argentina",2100,"./media/Gin_Aconcagua.jpeg"));
productos.push(new Producto("G002","Brighton","Gin","London Dry","Argentina",1020,"./media/GinBrighton.jpeg"));
productos.push(new Producto("G003","Bombay Bramble","Gin","Bramble","Inglaterra",4400,"./media/GinBombayRed.jpeg"));
productos.push(new Producto("G004","Gordons","Gin","London Dry","Inglaterra",2200,"./media/GinGordons.jpeg"));
productos.push(new Producto("G005","Bombay Sapphire","Gin","Dry","Inglaterra",3500,"./media/GinBombayAzul.jpeg"));
productos.push(new Producto("G006","Kunuk Citrico","Gin","London Dry","Argentina",2900,"./media/GinKunuk.jpeg"));
productos.push(new Producto("G007","Merle","Gin","London Dry","Argentina",1220,"./media/GinMerle.jpeg"));
productos.push(new Producto("G008","Beefeater","Gin","London Dry","Inglaterra",5750,"./media/Gin_Beefeater.jpeg"));
productos.push(new Producto("W001","Ballantines","Whiskey","Scotch","Escocia",2600,"./media/WhiskeyBallantines.jpeg"));
productos.push(new Producto("W002","Jack Daniels","Whiskey","Bourbon","EEUU",4700,"./media/WhiskeyJackDaniels.jpeg"));
productos.push(new Producto("W003","Johnny Walk. Gold","Whiskey","Scotch","Escocia",8500,"./media/JohnnyGoldLabel.jpeg"));
productos.push(new Producto("W004","Jim Bean","Whiskey","Bourbon","EEUU",5000,"./media/WhiskeyJimBean.jpeg"));
productos.push(new Producto("W005","Jim Bean Honey","Whiskey","Bourbon","EEUU",4300,"./media/WhiskeyJimBeanHoney.jpeg"));
productos.push(new Producto("W006","Johnny Walk. Black","Whiskey","Scotch","Escocia",5300,"./media/WhiskeyJohnnyBlack.jpeg"));
productos.push(new Producto("W007","Johnny Walker Red","Whiskey","Scotch","Escocia",2700,"./media/WhiskeyJohnnyRed.jpeg"));
productos.push(new Producto("W008","Variedades Jim Bean","Whiskey","Scotch","EEUU",11000,"./media/WhiskeyJimBean.jpeg"));

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
    <h5 id="${productos.codigo}" class="card-title">${productos.marca.toUpperCase()}</h5>
    <p class="card-text"> Tipo:${productos.tipo} <br/> Origen:${productos.origen}
    <br/> Código:${productos.codigo} <br/> <span class="precio"> Precio:$ ${productos.precio} </span> </p>
    <a href="#" class="btn btn-primary">Agregar al carrito</a> </div>
    `;
    seccionProductos.appendChild(card);
}

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
