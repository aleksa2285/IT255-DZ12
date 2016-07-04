<?php

include("cfg.php");
function checkLogin($username, $password){

	global $connection;
	$rarray = array();
	$password = $password;
	$result = $connection->prepare("SELECT * FROM user WHERE username=? AND password=?");
	$result->bind_param("ss",$username,$password);
	$result->execute();
	$result->store_result();
	$num_rows = $result->num_rows;
	if($num_rows > 0)
	{
		return "true";
		
	}
	else{
		return "false";
	 }

}
function login($username, $password){
	global $connection;
	$rarray = array();
	if(checkLogin($username,$password)){
		$id = sha1(uniqid());
		$result2 = mysqli_query($conn,"UPDATE user SET token='$id' WHERE username='$username'");
		$rarray['token'] = $id;
	} else{
		$rarray['error'] = "Invalid username/password";
	}
	return json_encode($rarray);
}
function register($email, $username, $password){

	global $connection;
	$rarray = array();
	$errors = "";
	if(checkIfUserExists($username)){
		$errors .= "Username already exists\r\n";
	}
	if(strlen($email) < 6){
		$errors .= "Email address must have at least 6 characters\r\n";
	}
	if(strlen($username) < 5){
		$errors .= "Username must have at least 5 characters\r\n";
	}
	if(strlen($password) < 5){
		$errors .= "Password must have at least 5 characters\r\n";
	}
	if($errors == ""){
		$stmt = $connection->prepare("INSERT INTO user (email, username, password) VALUES (?, ?, ?)");
		$pass =md5($password);
		$stmt->bind_param("sss", $email, $username, $pass);
		if($stmt->execute()){
		    $id = sha1(uniqid());
			$result2 = $connection->prepare("UPDATE user SET token=? WHERE username=?");
			$result2->bind_param("ss",$id,$username);
			$result2->execute();
			$rarray['token'] = $id;
		}else{
			$rarray['error'] = "Database connection error";
		}
	} else{
		$rarray['error'] = json_encode($errors);
	}
	 return json_encode($rarray); 
}
function checkIfUserExists($username){

	global $connection;
	$result = $connection->prepare("SELECT * FROM user WHERE username=?");
	$result->bind_param("s",$username);
	$result->execute();
	$result->store_result();
	$num_rows = $result->num_rows;
	if($num_rows > 0)
	{
		return true;
	}
	else{
		return false;
	}
}

?>
