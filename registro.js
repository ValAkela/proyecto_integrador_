let usuario = prompt("Ingrese el nombre de usuario:")
password = prompt("Ingrese su contraseña")
emailUsuario = prompt("Ingrese el email:")
rolUsuario = prompt("Ingrese su rol")

document.write(` Usuario creado:<br>
    Nombre de usuario:  ${usuario} <br> 
    Contraseña:  ${password} <br>
    `) 
    document.write(`Correo:  ${emailUsuario} <br>
    Rol:  ${rolUsuario} <br>`)

    document.write ("<h4> Sus datos han sido guardados con éxito </h4>")
