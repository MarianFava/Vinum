//Declaración del array productos
const productos = [];
//Declaración de la clase
class Producto {
    constructor (codigo, tipo, marca, variedad, precio, imagen){
        this.codigo = codigo;
        this.tipo = tipo;
        this.marca = marca;
        this.variedad = variedad;
        this.precio = precio;
        this.imagen = imagen;
    }
}
//Con el método push incorporamos los nuevos objetos de tipo "Producto" al Array productos
productos.push(new Producto("V001","Vino","Chateau Cordillera","Malbec",1220,"./media/ChateuMalbec.jpeg"));
productos.push(new Producto("V002","Vino","Chateau Cordillera","Cabernet",1220,"./media/ChateuCabSauv.jpeg"));
productos.push(new Producto("V003","Vino","Caminante","Chardonnay",820,"./media/CaminanteChardonnay.jpeg"));
productos.push(new Producto("V004","Vino","Azul","Malbec",610,"./media/AzulMalbec.jpeg"));
productos.push(new Producto("V005","Vino","Acordeon","Malbec",820,"./media/AcordeonMalbec.jpeg"));
productos.push(new Producto("V006","Vino","Chateau Cordillera","Cabernet Franc",1220,"./media/ChateuCabFranc.jpeg"));
productos.push(new Producto("V007","Vino","Caminante","Cabernet Franc",820,"./media/CaminanteCabFranc.jpeg"));
productos.push(new Producto("V008","Vino","Caminante","Malbec",830,"./media/CaminanteMalbec.jpeg"));


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
        codigoIngresado = prompt("Ingrese código de producto.V001, V002, V003, V004, V005, V006, V007, V008. Ingrese 'Q' para finalizar la compra.");
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


