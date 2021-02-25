<?php
	require_once __DIR__ . "/config.php";
    require_once DIR_UTIL . "fishyDbManager.php"; //includes Database Class
    require_once DIR_UTIL . "sessionUtil.php"; //includes session utils
 
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$errorMessage = login($username, $password);
	if($errorMessage === "OK")
		header('location: game.php');
	else
		header('location: ./newUser.php?errorMessage=' . $errorMessage );


	function login($username, $password){   
		if ($username != null && $password != null){
			$esito = authenticate($username, $password);
    		if ($esito === "OK" ){
    			session_start();
    			setSession($username);
    			return "OK";
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

		$queryIsPresent = "	SELECT *
			              	FROM player 
			            	WHERE Nickname ='" . $username . "'	";

		$playerIsPresent = $fishyDb->performQuery($queryIsPresent);
		$numRow = mysqli_num_rows($playerIsPresent);
		if($numRow != 0){
			return "Nickname already chosen";
		}

		$queryNewPlayer = "
							 INSERT INTO player (Nickname,Password)
							 VALUES ('" . $username . "', '" . $password . "')
							";

	    $newPlayer = $fishyDb->performQuery($queryNewPlayer);
	    if(!$newPlayer){
	    	return "Errore nella query di inserimento";
	    } else{
			return "OK";
	    }
	}
?>