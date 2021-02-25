var PLAYGROUND_WIDTH = 800;
var PLAYGROUND_HEIGHT = 500;

var FISH_WIDTH = 586;
var FISH_HEIGHT = 339;
var GROW_FACT = 250;
var SCORE_FACT = 10;

var player;
var playGround = document.getElementById("playground"); 
var playGroundContext = playGround.getContext("2d");

var FISH_SIZE = 15;

var arrayEnemies = [];
var maxEnemies = 10;
var idEnemy = 0;
var score = 0;

function begin() {
	console.log("begin()");
	document.getElementById('play').remove();
	player = new Fish();
	start();
}

function start() {
	console.log("start()");
	player.drawPlayer();
	window.addEventListener('keydown', function (e) {
        e.preventDefault();
        playGround.keys = (playGround.keys || []);
        playGround.keys[e.keyCode] = (e.type == "keydown");
    })
    window.addEventListener('keyup', function (e) {
		playGround.keys[e.keyCode] = (e.type == "keydown");            
	})
	
	for(var i=0; i<maxEnemies; i++){
		var enemy = new Enemy();
		enemy.initialize();
		arrayEnemies.push(enemy);
		enemy.draw();
	}

	interval = setInterval(update, 20);
	
}

function update() {
	//console.log("ok");
	playGroundContext.clearRect(0, 0, PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT);
	drawScore();
    player.updateSpeed(playGround);
    player.updatePosition();
    player.drawPlayer();
    for(var i=0; i<maxEnemies; i++){
		arrayEnemies[i].updatePosition(i);
		arrayEnemies[i].draw();
	}
	checkIntersection();

   /* for(var i = 0; i < 100; i++) {
		arrayPesci[i].aggiornaPosizione();
		arrayPesci[i].disegnaPesce();
	}*/
}

function checkIntersection() {
	for(var i=0; i<maxEnemies; i++){
		enemy = arrayEnemies[i];
		if(
			(((player.x + player.width) > enemy.x) && ((player.x + player.width) < (enemy.x + enemy.width)) 
				&& ((player.y + player.height) > enemy.y) && ((player.y + player.height) < (enemy.y + enemy.height)))
			||
			((player.x < (enemy.x + enemy.width)) && (player.x > enemy.x)
				&& ((player.y + player.height) > enemy.y) && ((player.y + player.height) < (enemy.y + enemy.height)))
			||
			((player.x < (enemy.x + enemy.width)) && (player.x > enemy.x)
				&& (player.y < (enemy.y + enemy.height)) && (player.y > enemy.y))
			||
			(((player.x + player.width) > enemy.x) && ((player.x + player.width) < (enemy.x + enemy.width))
				&& (player.y < (enemy.y + enemy.height)) && (player.y > enemy.y))
			||
			(((enemy.x + enemy.width) > player.x) && ((enemy.x + enemy.width) < (player.x + player.width)) 
				&& ((enemy.y + enemy.height) > player.y) && ((enemy.y + enemy.height) < (player.y + player.height)))
			||
			((enemy.x < (player.x + player.width)) && (enemy.x > player.x)
				&& ((enemy.y + enemy.height) > player.y) && ((enemy.y + enemy.height) < (player.y + player.height)))
			||
			((enemy.x < (player.x + player.width)) && (enemy.x > player.x)
				&& (enemy.y < (player.y + player.height)) && (enemy.y > player.y))
			||
			(((enemy.x + enemy.width) > player.x) && ((enemy.x + enemy.width) < (player.x + player.width))
				&& (enemy.y < (player.y + player.height)) && (enemy.y > player.y))
			)
			checkLose(i);
	}
	// roba di heatbox.. difficile da commentare.. di fondo nei primi 4 pezzi di if viene controllato se 
	// una delle coordinate di player entra all'interno della hitbox dell'enemy, successivamente viene fatto
	// lo stesso, ma a parti invertite.
}

function checkLose(i){
	if(player.width < arrayEnemies[i].width)
		youDied();
	else {
		player.width += FISH_WIDTH/GROW_FACT;
		player.height += FISH_HEIGHT/GROW_FACT;
		if(player.y + player.speedY > PLAYGROUND_HEIGHT-player.height/2) {
			player.y -= FISH_WIDTH/GROW_FACT;
		}
		if(player.y + player.speedY < -player.height/2) {
			player.y += FISH_WIDTH/GROW_FACT;
		}
		updateScore(i);
		arrayEnemies[i].removeEnemy(i);
	}
}

function updateScore(i){
	score += Math.ceil(arrayEnemies[i].width/SCORE_FACT); //ceil is to Round a number upward to its nearest integer
}

function youDied(){
	console.log("youDied");
}