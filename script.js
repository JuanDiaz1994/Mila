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

let cantidadCompra = prompt("¿Que cantidad de productos distintos desea comprar?")

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que productos quiere comprar: \n - Aritos\n - Collar Ory\n - Bowl")

    if (productoCompra == "Aritos"){
        let cantidadProducto_aritos = prompt("ingrese que cantidad de " + aritos + " desea comprar:")
        if(cantidadProducto_aritos <= stockAritos){
            precioTotal = precioTotal + (cantidadProducto_aritos * precio_Aritos)
        }
        else{
            alert("Actualmente tenemos " + stockAritos + " unidades de este producto")
        }

    }
    else if(productoCompra == "Collar Ory"){
        let cantidadProducto_collarOry = prompt("ingrese que cantidad de " + collarOry + " desea comprar:")
        if(cantidadProducto_collarOry <= stockCollarOry){
            precioTotal = precioTotal + (cantidadProducto_collarOry * precio_CollarOry)
        }
        else{
            alert("Actualmente tenemos " + stockCollarOry + " unidades de este producto")
        }

    }
    else if(productoCompra == "Bowl"){
        let cantidadProducto_bowl = prompt("ingrese que cantidad de " + bowl + " desea comprar:")
        if(cantidadProducto_bowl <= stockBowl){
            precioTotal = precioTotal + (cantidadProducto_bowl * precio_bowl)
        }
        else{
            alert("Actualmente tenemos " + stockBowl + " unidades de este producto")
        }
    }
    else{
        alert ("no tenemos ese producto en stock")
    }
}    
if(precioTotal !=0){
    alert("el precio total es: " + precioTotal)
}
