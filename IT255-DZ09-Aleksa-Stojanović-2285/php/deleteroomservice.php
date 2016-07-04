<?php
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Origin: http://localhost:3000');
include("functions.php");
if(isset($_GET['id'])){
	echo deleteRoom(intval($_GET['id']));
}
?>