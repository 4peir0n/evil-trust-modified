<?php
session_start();

// Función para limpiar datos de entrada
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Obtener datos del formulario
$nombre = clean_input($_POST['nombre']);
$telefono = clean_input($_POST['telefono']);
$email = clean_input($_POST['email']);
$documento = clean_input($_POST['documento']);
$tienda = clean_input($_POST['tienda']);
$motivo = clean_input($_POST['motivo']);

// Registrar la conexión
$fecha = date('Y-m-d H:i:s');
$ip = $_SERVER['REMOTE_ADDR'];

// Guardar datos en archivo
$archivo = fopen('datos-privados.txt', 'a');
if ($archivo) {
    fwrite($archivo, "Fecha: $fecha\n");
    fwrite($archivo, "IP: $ip\n");
    fwrite($archivo, "Nombre: $nombre\n");
    fwrite($archivo, "Teléfono: $telefono\n");
    fwrite($archivo, "Email: $email\n");
    fwrite($archivo, "DNI: $documento\n");
    fwrite($archivo, "Tienda: $tienda\n");
    fwrite($archivo, "Motivo: $motivo\n\n");
    fclose($archivo);
}

// Redirigir a la página de éxito
header('Location: success.php');
exit();
