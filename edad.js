let edad=0;
const anioActual = 2023;
let anioNacimiento = prompt("Ingresa tu año de nacimiento:");
if(!isNaN(anioNacimiento)){
    if(anioNacimiento<2024){
        let edad =anioActual - anioNacimiento;
        console.log("Tu edad actual es: " + edad + " años.");
    }else{
        console.log("debes colocar un año no mayor del actual")
    }
}else{
    console.log("debes colocar un numero")
}


