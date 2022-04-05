//Declaración del array productos
const productos = [];
//Declaración de la clase
class Producto {
    constructor (codigo, marca, tipo, origen, precio, imagen){
        this.codigo = codigo;
        this.marca = marca;
        this.tipo = tipo;
        this.origen = origen;
        this.precio = precio;
        this.imagen = imagen;
    }
}
//Con el método push incorporamos los nuevos objetos de tipo "Producto" al Array productos
productos.push(new Producto("V001","Chateau Cordillera","Malbec","Montecaseros,Mendoza",1220,"./media/ChateuMalbec.jpeg"));
productos.push(new Producto("V002","Chateau Cordillera","Cabernet","Montecaseros,Mendoza",1220,"./media/ChateuCabSauv.jpeg"));
productos.push(new Producto("V003","Caminante","Chardonnay","Valle de Uco",820,"./media/CaminanteChardonnay.jpeg"));
productos.push(new Producto("V004","Azul","Malbec","Agua Amarga,Tupungato",610,"./media/AzulMalbec.jpeg"));
productos.push(new Producto("V005","Acordeon","Malbec","Gualtallary,Mendoza",820,"./media/AcordeonMalbec.jpeg"));
productos.push(new Producto("V006","Chateau Cordillera","Cabernet Franc","Mendoza",1220,"./media/ChateuCabFranc.jpeg"));
productos.push(new Producto("V007","Caminante","Cabernet Franc","Mendoza",820,"./media/CaminanteCabFranc.jpeg"));
productos.push(new Producto("V008","Caminante","Malbec","Mendoza",830,"./media/CaminanteMalbec.jpeg"));
productos.push(new Producto("G001","Aconcagua","Dry","Argentina",2100,"./media/Gin_Aconcagua.jpeg"));
productos.push(new Producto("G002","Brighton","London Dry","Argentina",1020,"./media/GinBrighton.jpeg"));
productos.push(new Producto("G003","Bombay Bramble","Bramble","Inglaterra",4400,"./media/GinBombayRed.jpeg"));
productos.push(new Producto("G004","Gordons","London Dry","Inglaterra",2200,"./media/GinGordons.jpeg"));
productos.push(new Producto("G005","Bombay Sapphire","Dry","Inglaterra",3500,"./media/GinBombayAzul.jpeg"));
productos.push(new Producto("GOO6","Kunuk Citrico","London Dry","Argentina",2900,"./media/GinKunuk.jpeg"));
productos.push(new Producto("G007","Merle","London Dry","Argentina",1220,"./media/GinMerle.jpeg"));
productos.push(new Producto("G008","Beefeater","London Dry","Inglaterra",5750,"./media/Gin_Beefeater.jpeg"));
productos.push(new Producto("W001","Ballantines","Scotch","Escocia",2600,"./media/WhiskeyBallantines.jpeg"));
productos.push(new Producto("W002","Jack Daniels","Bourbon","EEUU",4700,"./media/WhiskeyJackDaniels.jpeg"));
productos.push(new Producto("W003","Johnny Walker Gold","Scotch","Escocia",8500,"./media/JohnnyGoldLabel.jpeg"));
productos.push(new Producto("W004","Jim Bean","Bourbon","EEUU",5000,"./media/WhiskeyJimBean.jpeg"));
productos.push(new Producto("WOO5","Jim Bean Honey","Bourbon","EEUU",4300,"./media/WhiskeyJimBeanHoney.jpeg"));
productos.push(new Producto("W006","Johnny Walker Black","Scotch","Escocia",5300,"./media/WhiskeyJohnnyBlack.jpeg"));
productos.push(new Producto("W007","Johnny Walker Red","Scotch","Escocia",2700,"./media/WhiskeyJohnnyRed.jpeg"));
productos.push(new Producto("W008","Variedades Jim Bean","Scotch","EEUU",11000,"./media/WhiskeyJimBean.jpeg"));



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
//Función que permite al usuario ingresar el código del producto para sumar el total de la compra
function ingresarProducto() {
    var codigoIngresado;

    do {
        codigoIngresado = prompt("Ingrese código de producto.V001, V002, V003, V004, V005, V006, V007, V008. Ingrese 'Q' para finalizar la compra.").toUpperCase();

        let precio = obtenerPrecioProducto(codigoIngresado);
        //Ingresando el valor Q se termina la repetición, finaliza el ciclo y vemos el total de la compra
        if (precio == 0 && codigoIngresado != "Q") {
            alert("El código ingresado no es válido");
        }
        totalCarrito = totalCarrito + precio;

    } while (codigoIngresado != "Q");
    return totalCarrito;

}
//Ejecución principal
let mostrarTotal = ingresarProducto();

alert("El total de su compra es: $" + mostrarTotal);

//Creación de cards manipulando el DOM

function dibujarCard(productos){
    let seccionProductos = document.getElementsByClassName("cardsCatalogo");

    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<img
    src="${productos.imagen}"
    class="card-img-top"
    alt="${productos.marca}"/>
    <div class="card-body">
    <h5 class="card-title">${productos.marca.toUpperCase()}</h5>
    <p class="card-text"> Tipo:${productos.tipo} <br/> Origen:${productos.origen}
    <br/> Código:${productos.codigo} <br/> Precio:${productos.precio} </p>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
    `;
    seccionProductos.appendChild(card);
}
for(const dato of productos){
    dibujarCard(dato);
}