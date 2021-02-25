var path = ".././";

function Fish() {
	console.log("new Fish")
	this.img = document.getElementById("player(")
	this.size = 25;
	this.width = FISH_WIDTH/this.size;
	this.height = FISH_HEIGHT/this.size;
	this.x = PLAYGROUND_WIDTH/2 - this.width/2;
	this.y = PLAYGROUND_HEIGHT/2 - this.height/2;
	this.speedX = 0;
	this.speedY = 0;
	/*console.log(
				this.img,
				this.x,
				this.y,
				this.size,
				this.width,
				this.height,
				this.speedX,
				this.speedY)*/
}

Fish.prototype.updateSpeed = function(playGround) {
	if (playGround.keys && playGround.keys[37]) { //sinistra
    	this.img.src = path + "img/player(.png"
    	if (this.speedX > -7.5) {
    		if(this.speedX > -1) this.speedX--;
    		this.speedX *= 1.08;
    	}
    }
    if (playGround.keys && playGround.keys[39]) { //destra
    	this.img.src = path + "img/player).png"
    	if (this.speedX < 7.5) {
    		if(this.speedX < 1) this.speedX++; 
    		this.speedX *= 1.08;
    	} 
    }
    if (playGround.keys && playGround.keys[38]) { //su
    	if (this.speedY > -6) {
    		if(this.speedY > -1) this.speedY--; 
    		this.speedY *= 1.08; 
    	}
    }
    if (playGround.keys && playGround.keys[40]) { //giu
    	if (this.speedY < 6) {
    		if(this.speedY < 1) this.speedY++; 
    		this.speedY *= 1.08 ; 
    	}
    }

    if (playGround.keys && playGround.keys[37] == false && playGround.keys[39] == false)
   		this.speedX *= 0.93;
	if (playGround.keys && playGround.keys[38] == false && playGround.keys[40] == false)
		this.speedY *= 0.93;
}

Fish.prototype.updatePosition = function() {
	if((this.x + this.speedX) > PLAYGROUND_WIDTH - this.width/4) 
		this.x = -this.width;
	if((this.x + this.speedX) < -this.width) 
		this.x = PLAYGROUND_WIDTH - this.width/4;
	
	if((this.y + this.speedY > PLAYGROUND_HEIGHT-this.height/2) ||
		(this.y + this.speedY < -this.height/2)) {
			this.speedY = 0;
		}
	else 
		this.y += this.speedY;
	this.x += this.speedX;
}