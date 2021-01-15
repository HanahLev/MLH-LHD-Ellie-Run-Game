var ellie = document.getElementById("ellie")
var obstacle = document.getElementById("obstacle")

function jump(){
	if(ellie.classList != "animate"){
		ellie.classList.add("animate");
	}
	setTimeout(function(){
		ellie.classList.remove("animate");
	},500);
}

var checkDead = setInterval(function(){
	var ellieTop = parseInt(window.getComputedStyle(ellie).
		getPropertyValue("top"));
	var obstacleLeft = parseInt(window.getComputedStyle(obstacle).
		getPropertyValue("left"));
	if(obstacleLeft<-20 && obstacleLeft>-175 && ellieTop>=100.5){
		obstacle.style.animation = "none";
		obstacle.style.display = "none";
		alert("Game Over!")
	}

},10);

function resetGame() {
	window.location.reload();
}