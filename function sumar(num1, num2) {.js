let num1 = prompt("Ingresa el primer numero:");
let num2 = prompt("Ingresa el segundo numero:");
function sumar(num1, num2) {
    return num1 + num2;
}
  
function restar(num1, num2) {
    return num1 - num2;
}
  
function multiplicar(num1, num2) {
    return num1 * num2;
}
  
function dividir(num1, num2) {
    return num1 / num2;
}

console.log("La suma de 30 y 15 es:", sumar(30, 15));
console.log("La resta de 30 y 15 es:", restar(30, 15));
console.log("La multiplicación de 30 y 15 es:", multiplicar(30, 15));
console.log("La división de 30 y 15 es:", dividir(30, 15));
