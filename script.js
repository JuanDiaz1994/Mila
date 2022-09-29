alert("Bienvenida!")

/* 3 productos --> mostrar prod --> Compra?
Que cantidad? --> mostrar precio total de compra */

let aritos = "aritos"
let precio_Aritos = 250
let stockAritos = 15

let collarOry = "collar_ory"
let precio_CollarOry = 1350
let stockCollarOry = 5

let bowl = "Bowl"
let precio_bowl = 450
let stockBowl = 10

let precioTotal = 0

alert("estos son nuestros productos: \n - Aritos\n - Collar Ory\n - Bowl")

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

    let productoCompra = prompt("Ingrese que productos quiere comprar: \n - Aritos\n - Collar Ory\n - Bowl")

    if (productoCompra == "Aritos"){
        let cantidadProducto_aritos = prompt("ingrese que cantidad de " + aritos + " desea comprar:")
        calculoStock(cantidadProducto_aritos,stockAritos, precio_Aritos)

    }
    else if(productoCompra == "Collar Ory"){
        let cantidadProducto_collarOry = prompt("ingrese que cantidad de " + collarOry + " desea comprar:")
        calculoStock(cantidadProducto_collarOry, stockCollarOry, precio_CollarOry)
    }
    else if(productoCompra == "Bowl"){
        let cantidadProducto_bowl = prompt("ingrese que cantidad de " + bowl + " desea comprar:")
        calculoStock(cantidadProducto_bowl, stockBowl, precio_bowl)
    }
    else{
        alert ("no tenemos ese producto en stock")
    }
}    
if(precioTotal !=0){
    alert("el precio total es: " + precioTotal)
}
