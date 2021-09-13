var x = 50;
var y = 50;
var speedX = 2;
var speedY = 1;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  background('blue');
  // stel vulkleur in
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x,y,80,80);
  
//positie
  x = x + speedX;
  y = y + speedY;

  if (y === 720){
    speedY= speedY *- 1;
  }

  if (y === 0) {
    speedY = speedY *-1;
  }

  if (x === 1280) {
    speedX = speedX *-1;

  }

  if (x === 0){
    speedX = speedX *- 1;
  }
}