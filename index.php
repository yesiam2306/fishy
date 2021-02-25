<?php
	session_start();
	require_once __DIR__ . "/php/config.php";
    include DIR_UTIL . "sessionUtil.php";

    if (isLogged()){
		    header('Location: ./php/game.php');
		    exit;
    }	
?>

<!DOCTYPE html>
<html lang = "it">
	<head>
		<meta charset="utf-8"> 
    	<meta name = "author" content = "Diego Del Castello">
    	<meta name = "keywords" content = "fishy">
		<link rel="stylesheet" type="text/css" href="css/canvas.css">
    	<link href='https://fonts.googleapis.com/css?family=Annie Use Your Telescope' rel='stylesheet'>
    	<title> Fishy </title>
		<img id = "player(" class="player" src="img/player(.png">
		<img id = "player)" class="player" src="img/player).png">
	</head>
	<body>
		<div id="id01" class="modal">
  
			<form class="modal-content animate" action="./php/login.php" method="post">

			    <div class="areaAuth" width=800 height=500>
				    <label for="nickname"><b>Nickname</b></label>
				    	<input type="text" placeholder="Nickname" name="username" required>

				    <label>Password</label>
						<input type="password" placeholder="Password" name="password" required>
				        
				    <button name="login" type="submit">LOG IN</button>
				    <p>Not a member yet?<br />
					<a href='./php/newUser.php'>Register Now!</a></p>
					<?php
						if (isset($_GET['errorMessage'])){
							echo '<div class="sign_in_error">';
							echo '<span>' . $_GET['errorMessage'] . '</span>';
							echo '</div>';
						}
					?>
			    </div>
			</form>
		</div>
		<canvas id="playground" width="800" height="500"></canvas>
		<label><b>Score:</b>
			<input id="score" type="text" name="score" value="0" readonly="0">
		</label>
		<script type="text/javascript" src="js/fish.js"></script>
		<script type="text/javascript" src="js/enemy.js"></script>
		<script type="text/javascript" src="js/draw.js"></script>
		<script type="text/javascript" src="js/game.js"></script>
	</body>
</html>