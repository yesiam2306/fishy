<?php
	require_once __DIR__ . "/config.php";
    require_once DIR_UTIL . "fishyDbManager.php"; //includes Database Class
    require_once DIR_UTIL . "sessionUtil.php"; //includes session utils
 
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$errorMessage = login($username, $password);
	if($errorMessage === null)
		header('location: ./game.php');
	else
		header('location: ./../index.php?errorMessage=' . $errorMessage );


	function login($username, $password){   
		if ($username != null && $password != null){
			$esito = authenticate($username, $password);
    		if ($esito === "OK" ){
    			session_start();
    			setSession($username);
    			return null;
    		}
    		else return $esito;
    	} 
    	else
    		return 'You should insert something';
	}
	
	function authenticate ($username, $password){   
		global $fishyDb;
		$username = $fishyDb->sqlInjectionFilter($username);
		$password = $fishyDb->sqlInjectionFilter($password);

		$querySelectPlayer = "
						SELECT * 
						FROM Player 
						WHERE Nickname = '" . $username . "' AND Password = '" . $password . "'
					";
		
		$result = $fishyDb->performQuery($querySelectPlayer);
		$numRow = mysqli_num_rows($result);
		if ($numRow != 1)
			return 'Username or password not valid.'; //. $username . ' ' . $password;
		
		$fishyDb->closeConnection();
		return "OK";
	}

?>