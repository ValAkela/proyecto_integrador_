

const usuario = "Maria";
const password= "1234";
let intentos = 0;
let maxIntentos = 3;
let acceso = false;

console.log("Usuario ingresado: " + usuario);
console.log("Contraseña ingresada: " + password);
console.log("Acceso concedido. Bienvenido, " + usuario);

/*while (intentos < maxIntentos && acceso == false) {
  

  let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
  let passwordIngresada = prompt("Ingrese su contraseña:");

  if (usuarioIngresado == usuario && passwordIngresada == password) {
    acceso = true; 
    document.write("<h2>Acceso concedido. Bienvenido, " + usuarioIngresado + "</h2>");
  } else {
    intentos = intentos + 1;
    document.write("<p>Intento " + intentos + " de " + maxIntentos + ": usuario o contraseña incorrectos.</p>");
  }
}

if (acceso == false) {
  document.write("<h2>>Ha superado el número máximo de intentos. Cuenta bloqueada.</h2>");
}
*/

