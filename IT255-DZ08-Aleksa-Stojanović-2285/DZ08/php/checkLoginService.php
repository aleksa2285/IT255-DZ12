<?php

include("evaluationFunctions.php");
header("Access-Control-Allow-Origin: null");

if(isset($_POST['username']) && isset($_POST['password'])){
	
$username = $_POST['username'];
$password = $_POST['password'];
echo checkLogin($username, $password);
}
?>