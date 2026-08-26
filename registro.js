let nombreUsuario = prompt("Ingrese el nombre de usuario:")
passwordUsuario = prompt("Ingrese su contraseña")
emailUsuario = prompt("Ingrese el email:")
rolUsuario = prompt("Ingrese su rol")



document.write(` Usuario creado:<br>
    Nombre de usuario:  ${nombreUsuario} <br> 
    Contraseña:  ${passwordUsuario} <br>
    `) 
    document.write(`Correo:  ${emailUsuario} <br>
    Rol:  ${rolUsuario} <br>`)

    document.write ("<h4> Sus datos han sido guardados con éxito </h4>")
