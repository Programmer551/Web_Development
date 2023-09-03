let a1=1
var player=document.getElementById("player")
var enemy=document.getElementById('enemy')
var gameover=document.getElementById('gameover')
let a=document.addEventListener("keydown",keypress)
var number=0; 
var score=document.getElementById('score')
var num=document.getElementById("number")
function keypress(event) {
	if (event.key==="ArrowLeft") {

		player.style.left = --a1+"vw"


	}
 else if (event.key==="ArrowRight") {
	
		player.style.left = ++a1+"vw"
	}
else if (event.key==="ArrowUp") {

		player.classList.add("playeranimation")
		setTimeout(function hey () {
			player.classList.remove("playeranimation")
		},900)

	}
else{
	
}


}
var s=setInterval(()=>{
	console.log(++number)
     num.innerHTML=number
},999)
setInterval(detectCollision, 100); 
function overgame () {
	gameover.style.display = 'block'
	player.classList.remove("playeranimation")
	enemy.classList.remove("enemyanimation")
clearInterval(s)
}
function checkCollision(element1, element2) {
  let rect1 = element1.getBoundingClientRect();
  let rect2 = element2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}
function detectCollision() {
  if (checkCollision(player, enemy)) {
  	 var audio = document.getElementById("audio");
  audio.play();
    overgame();
  }
}