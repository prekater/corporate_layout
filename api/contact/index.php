<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$name = $_POST['name'];
	$name = htmlspecialchars($name);
	$name = urldecode($name);
	$name = trim($name);
	
	$phone = $_POST['phone'];
	$phone = htmlspecialchars($phone);
	$phone = urldecode($phone);
	$phone = trim($phone);


	$to = "it-technology@internet.ru";

	$from = $_POST['email'];
	$from = htmlspecialchars($from);
	$from = urldecode($from);
	$from = trim($from);


	// data
	$msg = $name . ' ' . $phone  ;

	// Headers
	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, 'Свяжитесь со мной', $msg, $headers);

	// echo json_encode( $_POST );
	echo json_encode(array(
		"mailSent" => true
	));
	}
  else
	{

	// tell the user about error

	echo json_encode(["mailSent" => false, "message" => "Что-то пошло не так :-("]);
	}

?>