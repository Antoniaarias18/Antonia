let string1 = "Hello";
let string2 = "My name is";
let string3 = "Antonia :)";


let number1 = 10;
let number2 = 3.14;
let number3 = -5;


let boolean1 = true;
let boolean2 = false;
let boolean3 = 10 > 5;


const PI = 3.14159;


let array1 = [1, 2, 3];
let array2 = ["apple", "banana", "orange"];
let array3 = [true, false, true];

//2

console.log(string1);


console.log(number2);


console.log(boolean3);


console.log(PI);


console.log(array1);

//3

let continuar = true;

while (continuar) {
    
    let operacion = prompt("Ingrese la operación que desea realizar: \n a. Sumar \n b. Restar \n c. Multiplicar \n d. Dividir");

    
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    
    let resultado;

    
    switch (operacion) {
        case 'a':
            resultado = numero1 + numero2;
            break;
        case 'b':
            resultado = numero1 - numero2;
            break;
        case 'c':
            resultado = numero1 * numero2;
            break;
        case 'd':
            
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = "No se puede dividir por cero.";
            }
            break;
        default:
            resultado = "Operación inválida.";
    }

    console.log("El resultado de la operación es: " + resultado);

    let continuarStr = prompt("¿Desea realizar otra operación? (Sí/No)").toLowerCase();
    if (continuarStr !== 'si' && continuarStr !== 'sí') {
        continuar = false;
    }
}

console.log("¡Gracias por usar la calculadora!");

//4

let registro = new array();


let datos = ["Documento", "Nombre", "Apellido", "Correo", "Salario", "Programa", "Institución", "Esta Activo"];

let documento = prompt("ingrese su documento;")
registro.push(documento);

let nombre = prompt("ingrese su nombre;")
registro.push(nombre);

let apellido = prompt("ingrese su apellido;")
registro.push(apellido);

let correo = prompt("ingrese su correo;")
registro.push(correo);

let salario = prompt("ingrese su salario;")
registro.push(salario);

let programa = prompt("ingrese su programa;")
registro.push(programa);

let institucion = prompt("ingrese su institucion;")
registro.push(institucion);

let estaActivo = prompt("ingrese su activo;")
registro.push(estaActivo);


for (let i = 0; i < datos.length; i++) {
    
    registro.push(prompt("Ingrese " + datos[i]));
}

 HTML 
document.write("<h2>Datos del Registro</h2>");
document.write("<ul>");
for (let i = 0; i < registro.length; i++) {
    
    document.write("<li>" + datos[i] + ": " + registro[i] + "</li>");
}
document.write("</ul>");

//5

let numero = 1;
let suma = 0;

while (numero <= 10) {
    suma += numero;
    numero++;
}

console.log("La suma de los números del 1 al 10 es: " + suma);

//6

