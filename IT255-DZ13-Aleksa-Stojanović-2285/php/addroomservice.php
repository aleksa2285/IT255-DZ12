<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');  
include("functions.php");

if(isset($_POST['roomName']) && isset($_POST['hasTV']) && isset($_POST['beds']) && isset($_POST['brojkvadrata'])){
 
$roomName = $_POST['roomName'];
$hasTV = intval($_POST['hasTV']);
$beds = $_POST['beds'];
$brojkvadrata = $_POST['brojkvadrata'];

echo addRoom($roomName, $hasTV, $beds, $brojkvadrata);

}

?>