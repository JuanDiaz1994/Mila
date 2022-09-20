function bienvenida(){
    alert("bienvenida!")
}

bienvenida()

function calculadora(primerNumero, segundoNumero, operacion) {
    switch(operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

let numeroA = parseInt(prompt("Ingrese el numero:"))

let operacion = prompt("ingrese que operacion desea realizar:")

let numeroB = parseInt(prompt("Ingrese otro numero:"))

alert(calculadora(numeroA, numeroB, operacion))
