<?php
function getIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

function logData($data) {
    $fecha = date('Y-m-d H:i:s');
    $ip = getIP();
    
    $archivo = fopen('datos-privados.txt', 'a');
    if ($archivo) {
        fwrite($archivo, "Fecha: $fecha\n");
        fwrite($archivo, "IP: $ip\n");
        fwrite($archivo, $data . "\n\n");
        fclose($archivo);
    }
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validatePhone($phone) {
    return preg_match('/^[0-9]{9}$/', $phone);
}

function validateDNI($dni) {
    return preg_match('/^[0-9]{8}$/', $dni);
}
?>
