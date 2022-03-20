
/*let edad = prompt("Ingrese su edad");

if (edad < 18) {
    alert ("Es menor de edad, prohibida la venta")
}*/


//Variable global que contiene el total de productos incorporados al carrito
var totalCarrito = 0;

//Esta función permite obtener el precio a partir del código del producto
function obtenerPrecioProducto(codigoProducto) {
    let precio = 0;
    switch (codigoProducto) {
        case "v001":
            precio = 1220;
            break;
        case "v002":
            precio = 1220;
            break;
        case "v003":
            precio = 820;
            break;
        case "v004":
            precio = 610;
            break;
        case "v005":
            precio = 820;
            break;
        case "v006":
            precio = 1220;
            break;
        case "v007":
            precio = 820;
            break;
        case "v008":
            precio = 830;
            break;

        default:

            break;
    }
    return precio;
}
//Función que permite al usuario ingresar el código del producto para sumar el total de la compra
function ingresarProducto() {
    var codigoIngresado;

    do {
        codigoIngresado = prompt("Ingrese código de producto. Ingrese 'Q' para finalizar la compra.");
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
