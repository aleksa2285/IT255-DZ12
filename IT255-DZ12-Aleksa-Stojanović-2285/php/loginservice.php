<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: *');  
// header('Access-Control-Allow-Headers: X-Requested-With,content-type,access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
// header('Access-Control-Allow-Credentials: true');
// header('Access-Control-Expose-Headers: true');

include("functions.php");
if(isset($_POST['username']) && isset($_POST['password'])){
	
$username = $_POST['username'];
$password = $_POST['password'];
echo checkLogin($username, $password);



}
?>