Fish.prototype.drawPlayer = function () {
	//console.log("drawPlayer");
	/*console.log(this.img.src,
				this.x,
				this.y,
				this.size,
				this.width,
				this.height,
				this.speedX,
				this.speedY)*/
	const canvas = document.getElementById('playground');
	const ctx = canvas.getContext("2d");
   	ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
}

Enemy.prototype.draw = function () {
	//console.log("drawEnemy");
	/*console.log(this.img.src,
				this.x,
				this.y,
				this.speedX,
				)*/
	const canvas = document.getElementById('playground');
	const ctx = canvas.getContext("2d");
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

function drawScore() {
	playGroundContext.font = "25px Annie Use Your Telescope";
	playGroundContext.fillStyle = "white";
	playGroundContext.fillText(score, 30, 30);
}