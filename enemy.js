function Enemy() {
	this.img = document.createElement("IMG");
	this.img.class = "enemy";
	this.img.id = idEnemy;
	this.img.src = "/img/pesce_grigio(.png";
	playGround.appendChild(this.img);
	this.size = (Math.random() * 10) + 20 ; //sceglie una taglia a caso tra 1 e 20
	this.width = FISH_WIDTH - ((FISH_WIDTH / 30) * this.size);
	this.height = FISH_HEIGHT - ((FISH_HEIGHT / 30) * this.size);
	this.x = 0;
	this.y = 0;
	this.speedX = 0;
	//interval = setInterval(this.updateContatore, 3000);
}


Enemy.prototype.initialize = function() { //DA RIORDINARE!!
	console.log("Enemy.initialize");
	idEnemy++;
	var ingressoX = Math.floor(Math.random() * 10)%2 //fa un numero a caso pari o dispari, quindi 1 o 0
	var scegliImmagine = Math.floor(Math.random() * 30)%3
	switch (scegliImmagine){
		case 0:
			if (ingressoX == 0) this.img.src = path + "img/pesce_grigio).png";
			else this.img.src = path + "img/pesce_grigio(.png";
			break;
		case 1:
			if (ingressoX == 0) this.img.src = path + "img/pesce_blu).png";
			else this.img.src = path + "img/pesce_blu(.png";
			break;
		case 2:
			if (ingressoX == 0) this.img.src = path + "img/pesce_marrone).png";
			else this.img.src = path + "img/pesce_marrone(.png";
			break;
	}	
	if (ingressoX == 0)
		this.x = -this.width;
	else
		this.x = PLAYGROUND_WIDTH;
	this.y = Math.random() * (PLAYGROUND_HEIGHT-this.height/4) -this.height/4; //sceglie a caso la coordinata y
	if (ingressoX != 0){
		while(this.speedX > -0.5)
			this.speedX = (Math.random() * -10000)/2500;
	}
	else {
		while(this.speedX < 0.5)
			this.speedX = (Math.random() * 10000)/2500;
	}
	//quantiPesci++;
}

/*
Enemy.prototype.updateContatore = function () {
	for(var i = 0; i < 10; i++) {
		if(arrayPesci[i].x >= PLAYGROUND_WIDTH || arrayPesci[i].x <= -arrayPesci[i].width) {
			arrayPesci[i] = new Enemy();
			arrayPesci[i].inizializza;
		}
	}
}*/


Enemy.prototype.removeEnemy = function(index) {
	var toRemove = document.getElementById(index);
	toRemove.remove();
	idEnemy = index;
	var enemy = new Enemy();
	enemy.initialize();
	arrayEnemies.splice(index, 1, enemy); 
}

Enemy.prototype.updatePosition = function(index) {
	this.x += this.speedX;
	if(this.x > PLAYGROUND_WIDTH || this.x < -this.width) {
		this.removeEnemy(index);
	}
}

