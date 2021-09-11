<?php
$destino= "johan10807@gmail.com";
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$pais=$_POST['pais'];
$whatsapp=$_POST['whatsapp'];
$contenido="nombre: " . $nombre . "\n 
correo: " . $correo ."\n
whatsapp: " . $whatsapp . "\n
pais: " . $pais; 
mail($destino,"Contacto", $contenido);
echo("<script>Correo enviado</script>")
header(Location.ref='gracias.html');
?>