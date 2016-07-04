<?php
$servername = "localhost";
$username = "root";
$password = "";
$database =  "it255-dz05";
$connection = new mysqli($servername, $username, $password, $database);
if ($connection->connect_error) {
die("Konekcija ima grešku: " . $connection->connect_error);
}
?>