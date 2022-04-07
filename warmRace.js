let moveSpeed = 0.3;
let speedRange = 3;
let finishLine = 900
let posA = 5;
let posB = 5;
let nameA=prompt("name of warm 1","James");
let nameB=prompt("name of warm 2","Brian");
function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(110,50,0);
  line(finishLine,0,finishLine,height)
  warmMove();
  checkEnd();  
}

function warmMove(){
  int(random(10)%2) ? posA+=moveSpeed+random(speedRange) : posB+=moveSpeed+random(speedRange);
  console.log(random(10)%2);
  fill(255,0,0);
  circle(posA, 100, 15);
  circle(posA-13, 100, 15);
  circle(posA-26, 100, 15);
  
  fill(255,255,0);
  circle(posB, 300, 15);
  circle(posB-13, 300, 15);
  circle(posB-26, 300, 15);
  
  showName();
}
function showName(){
  fill(0,255,0);
  text(nameA, posA,100);
  text(nameB,posB,300);
}

function checkEnd(){

  if(posA>finishLine){
    alert("warm 1"+nameA+" win!");
    posA=0;
    posB=0;
  }if(posB>finishLine){
    alert("warm 2 "+nameB+" win!");
    posA=0;
    posB=0;
  }
}
