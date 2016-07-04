<?php

include("evaluationFunctions.php");
header("Access-Control-Allow-Origin: *");

if(isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password'])){

$email = $_POST['email'];	
$username = $_POST['username'];
$password = $_POST['password'];
echo register($email, $username, $password);

}
?>