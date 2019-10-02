
// Practica realitzada per : Roger Colell Armadans i Marc Aparisi Rull

var x1, x2, y;
var toggleRotation;


function setup() {
  createCanvas(575, 750); // Creem el canvas amb el tamany que tè el poster original
  background(255, 127, 80); // Coloquem el color del background
  x1 = 234;
  x2 = 331;
  y = 275;
  t = 0;
  startColor = color(255,255,255); //Generem un color inicial  blanc 
  newColor = color(random(255),random(255),random(255)); //Utilitzant la funciò random() generem un nou color 
  amt = 0;
  

}

function draw() {
  
  background(255, 127, 80); 
  drawFirstQuads(50, 50); // dibuixem el primer quadrat centrat, en la posiciò x1 (esquerra) i x2 (dreta)
  drawQuads(100, 100); // Utilitzant la funciò drawquads explicada després i donant la posiciò en la que volem fer el seguent quadrat creem els diferents rombes 
  drawQuads(150, 150);
  drawQuads(200, 200);
  drawQuads(250, 250);
  drawQuads(300, 300);
  drawQuads(350, 350);
  drawQuads(400, 400);  
  drawText(); // dibuixem el text desprès de tot perquè no quedi tapat pel background ni els quads
   
  
}

function drawFirstQuads(qWeight, qWidth){
  fill(85, 107, 47); // color dels rombes de l'esquerra
  noStroke(); // sense border

  push();
  translate(x1, y); // movem el eix de coordenades a la posiciò x1 i la y corresponent perque quedi centrat i alineat
  if (toggleRotation){ // si toggle rotation esta a true, vol dir que l'usuari a clicat a pantalla
   rotate(radians(frameCount));   // si esta true, rotem x radians cada frame
  } else {
    rotate(PI * 0.75);  // si no coloquem els rombes a la posició inicial, aquest pi indica el grau d'inclinaciò que te el quadrat per tal de quedar com un rombe 
  }
  rect(0, 0, qWeight, qWidth);
  pop();

  fill(220, 220, 220); // Fem el mateix del primer rombe amb el segon, utilitzant la posició x
  noStroke();
  push();
  translate(x2, y);
  if (toggleRotation){
    rotate(radians(frameCount));  
  } else {
    rotate(PI * 0.75);
  }
  rect(0, 0, qWeight, qWidth);
  pop();

}

// Creació dels quadrats a dins del poster 
function drawQuads(qWeight, qWidth){ // Seguint la llògica utilitzada en la funciò drawFirstQuads, creem els rombes necessaris canviant el tamany

  noFill();  
  rectMode(CENTER);
  strokeWeight(12);

  stroke(85, 107, 47);
  
  push();
  translate(x1, y);
  if (toggleRotation){
    rotate(radians(frameCount));  
  } else {
    rotate(PI * 0.75);
  }
  rect(0, 0, qWeight, qWidth);
  pop();

  stroke(220, 220, 220);
  push();
  translate(x2, y);
  if (toggleRotation){
    rotate(radians(frameCount));  
  } else {
    rotate(PI * 0.75);
  }
  rect(0, 0, qWeight, qWidth);
  pop();

}
//Funciò que ens permet veure si l'usuari a fet click a pantalla
function  mouseClicked(){
    toggleRotation = !toggleRotation; 
  }

//Funciò per dibuixar el text a sota de la pantalla 
function drawText(){
  textSize(65);
  stroke(0);
  strokeWeight(1); 
  fill(lerpColor(startColor, newColor, amt)); // D'aquesta manera generem el canvi de color utilitzant les variables que hem creat al inici (startcolor, amt(contador de segons), newcolor)
  amt += 0.01;
  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }
  fill(newColor);
  text('the clash', 20, 650);

  textSize(12);
  text('with the brattles', 20, 700);
  text('matinee and eve', 140, 700);
  text('bonds international casino', 375, 700);
  text('and dead kennedys', 20, 720);
  text('saturday / june 13 1981', 140, 720);
  text('in times square, new york city', 375, 720);
}