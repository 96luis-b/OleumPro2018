<?php

$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

echo $nombre. "ha dicho:<br/>" .$emnsaje;
if(mail('luisbocaranda_12@hotmail.com',$asunto,$mensaje)){
    echo "mail enviado";
}else{
    echo "uuyuuyuyuy"
}

?>