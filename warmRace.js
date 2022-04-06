let moveSpeed = 0.3;
let speedRange = 3;
let finishLine = 900
let posA = 5;
let posB = 5;
function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(220);
  int(random(10)%2) ? posA+=moveSpeed+random(speedRange) : posB+=moveSpeed+random(speedRange);
  console.log(random(10)%2);
  fill(255,0,0);
  circle(posA, 100, 15)
  circle(posA-13, 100, 15)
  circle(posA-26, 100, 15)
  
  fill(255,255,0);
  circle(posB, 300, 15)
  circle(posB-13, 300, 15)
  circle(posB-26, 300, 15)
  
  if(posB>finishLine){
    
  }if(posA>finishLine){
    
  }
  line(finishLine,0,finishLine,height)
  
}
