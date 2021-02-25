<?php
	require_once __DIR__ . "/config.php";
	session_start();
    include DIR_UTIL . "sessionUtil.php";

    if (!isLogged()){
		    header('Location: ./../index.php');
		    exit;
    }	
?>

<!DOCTYPE html>
<html lang = "it">
	<head>
		<meta charset="utf-8"> 
    	<meta name = "author" content = "Diego Del Castello">
    	<meta name = "keywords" content = "fishy">
		<link rel="stylesheet" type="text/css" href="./../css/canvas.css">
    	<link href='https://fonts.googleapis.com/css?family=Annie Use Your Telescope' rel='stylesheet'>
    	<title> Fishy </title>
		<img id = "player(" class="player" src="./../img/player(.png">
		<img id = "player)" class="player" src="./../img/player).png">
	</head>
	<body>
		<div class="container">
			<canvas id="playground" width="800" height="500"></canvas>
			<button id="play" type="button" onclick="begin()">PLAY!</button>	
		</div>
		<script type="text/javascript" src="./../js/fish.js"></script>
		<script type="text/javascript" src="./../js/enemy.js"></script>
		<script type="text/javascript" src="./../js/draw.js"></script>
		<script type="text/javascript" src="./../js/game.js"></script>
	</body>
</html>