


/* 3 productos --> mostrar prod --> Compra?
Que cantidad? --> mostrar precio total de compra */


alert("Bienvenida!")

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
}
let Aritos = new Producto("Aritos", 250, 15)
let Collar_ory = new Producto("Collar Ory", 1350, 5)
let Bowl = new Producto("Bowl", 450, 10)
let mesaRatona = new Producto("Mesa ratona", 2400 , 8)
let ponchoTejido = new Producto("Poncho Tejido", 2500, 0)

let listaProductos = [Aritos, Collar_ory, Bowl, mesaRatona, ponchoTejido]

let listaProductosConStock = listaProductos.filter(prod => prod.stock > 0)

let listaNombres = listaProductosConStock.map(prod => prod.nombre)

let precioTotal = 0


alert("estos son nuestros productos: \n - " + listaNombres.join("\n - "))

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}
function calculoStock(cantidad,stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}


let cantidadCompra = prompt("¿Que cantidad de productos distintos desea comprar?")

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que productos quiere comprar: \n - Aritos\n - Collar Ory\n - Bowl\n - Mesa ratona\n - Poncho tejido")

    if (productoCompra == "Aritos"){
        let cantidadProducto_aritos = prompt("ingrese que cantidad de " + Aritos.nombre + " desea comprar:")
        calculoStock(cantidadProducto_aritos,Aritos.stock, Aritos.precio)
        Aritos.restarStock(cantidadProducto_aritos)

    }
    else if(productoCompra == "Collar Ory"){
        let cantidadProducto_collarOry = prompt("ingrese que cantidad de " + Collar_ory.nombre + " desea comprar:")
        calculoStock(cantidadProducto_collarOry, Collar_ory.stock, Collar_ory.precio)
        Collar_ory.restarStock(cantidadProducto_collarOry)
    }
    else if(productoCompra == "Bowl"){
        let cantidadProducto_bowl = prompt("ingrese que cantidad de " + Bowl.nombre + " desea comprar:")
        calculoStock(cantidadProducto_bowl, Bowl.stock, Bowl.precio)
        Bowl.restarStock(cantidadProducto_bowl)
    }
    else if(productoCompra == "Mesa ratona"){
        let cantidadProducto_mesaRatona = prompt("ingrese que cantidad de " + mesaRatona.nombre + " desea comprar:")
        calculoStock(cantidadProducto_mesaRatona, mesaRatona.stock, mesaRatona.precio)
        mesaRatona.restarStock(cantidadProducto_mesaRatona)
    }
    else if(productoCompra == "Poncho tejido"){
        let cantidadProducto_ponchoTejido = prompt("ingrese que cantidad de " + ponchoTejido.nombre + " desea comprar:")
        calculoStock(cantidadProducto_ponchoTejido, ponchoTejido.stock, ponchoTejido.precio)
        ponchoTejido.restarStock(cantidadProducto_ponchoTejido)
    }
    else{
        alert ("no tenemos ese producto en stock")
    }
}    
if(precioTotal !=0){
    alert("el precio total es: " + precioTotal)
}
