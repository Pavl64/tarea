let num1 = prompt("Ingresa el primer numero:");
num1=Number(num1);
let num2 = prompt("Ingresa el segundo numero:");
num2=Number(num2);
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

console.log("La suma de "+num1+" y "+num2+" es:", sumar(num1,num2));
console.log("La resta de "+num1+" y "+num2+" es:", restar(num1,num2));
console.log("La multiplicación de "+num1+" y "+num2+" es:", multiplicar(num1,num2));
console.log("La división de "+num1+" y "+num2+" es:", dividir(num1,num2));
