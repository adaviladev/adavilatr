<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Enviar un correo electrónico con los datos del formulario
    $para = "adavilatr@gmail.com";
    $asunto = "Nuevo mensaje desde el formulario de contacto";
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo Electrónico: $email\n";
    $contenido .= "Mensaje:\n$mensaje";
    
    // Enviar correo electrónico
    mail($para, $asunto, $contenido);

    // Redireccionar de vuelta a la página de contacto
    header("Location: contacto.html");
    exit;
}
?>
