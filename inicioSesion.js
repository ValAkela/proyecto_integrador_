const usuarioCorrecto = 'admin';
const passwordCorrecto = '1234';
let intentosFallidos = 0;
let bloqueado = false;

function validarCredenciales(usuario, password) {
  if (usuario === usuarioCorrecto && password === passwordCorrecto) {
    return true;
  }
  return false;
}

function mostrarMensaje(mensaje, tipo) {
  const mensajeBox = document.getElementById('mensaje');
  mensajeBox.textContent = mensaje;
  mensajeBox.className = tipo;
}

function bloquearFormulario() {
  const boton = document.getElementById('loginBtn');
  const usuario = document.getElementById('usuario');
  const password = document.getElementById('password');

  boton.disabled = true;
  usuario.disabled = true;
  password.disabled = true;
  bloqueado = true;
}

function iniciarSesion(evento) {
  evento.preventDefault();

  if (bloqueado) {
    mostrarMensaje('La cuenta está bloqueada por exceder los 3 intentos fallidos.', 'error');
    return;
  }

  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();

  console.log('Usuario ingresado:', usuario);
  console.log('Contraseña ingresada:', password);

  if (validarCredenciales(usuario, password)) {
    mostrarMensaje('Acceso permitido. Bienvenido ' + usuario + '.', 'success');
    return;
  }

  intentosFallidos += 1;

  if (intentosFallidos < 3) {
    mostrarMensaje('Datos incorrectos. Intento fallido ' + intentosFallidos + ' de 3.', 'error');
    return;
  }

  while (intentosFallidos >= 3) {
    mostrarMensaje('Se superaron los 3 intentos fallidos. Cuenta bloqueada.', 'error');
    bloquearFormulario();
    break;
  }
}

document.getElementById('loginForm').addEventListener('submit', iniciarSesion);

