<?php
$servername = "localhost";
$username = "root";
$password = "";
$database =  "angular2dz09";
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
die("Konekcija ima grešku: " . $conn->connect_error);} 
?>