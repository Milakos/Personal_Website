function setup() 
{
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
  noStroke();
  createEasyCam();
}
function windowResized()
{
  resizeCanvas(width, height);
}
function draw() 
{  
  background(7);
  circle(200);
  stroke(15);
  ambientLight(50);
  pointLight(255,255,255,0,200,0);
  
  rand.seed = 0;
  var count = 100;
  var trange = 80;
  for(var i = 0; i < count; i++)
  {
      var dx = rand() * 12 + 4;
      var tx = (rand() * 2 - 1) * trange;
      var ty = (rand() * 2 - 1) * trange;
      var tz = (rand() * 2 - 1) * trange;
      
      var r = ((tx / dx) * 0.5 + 0.5) * 255;
      var g = ((ty / dx) * 0.5 + 0.5) * r/2;
      var b = ((tz / dx) * 0.5 + 0.5) * g;

    push();
    translate(tx, -ty, tz);
    
    rotateY(millis()/1000);
    rotateX(millis() / 1000);
    rotateZ(millis()/ 1000);
    pointLight(r,g,b,200,0,0);
    pointLight(r,g,b,-200,0,0);
    pointLight(g,b,r,0,200,0);
    
    specularMaterial(200);
    shininess(10000);
    box(dx);
    pop();  
    
    push();
    translate(tx * -1.5,ty * 1.7,tz * -1.6);
    pointLight(r,g,b,200,0,0);
    pointLight(r,g,b,-200,0,0);
    pointLight(g,b,r,0,200,0);
    noStroke();
    specularMaterial(200);
    shininess(200);
    sphere(dx * 0.5);
    pop();
    
    
    push();
    translate(tx * -2,ty * -2,tz * -2);
    rotateY(millis()/1000);
    rotateX(millis() / 1000);
    rotateZ(millis()/ 1000);
    pointLight(r,g,b,200,0,0);
    pointLight(r,g,b,-200,0,0);
    pointLight(g,b,r,0,200,0);
    noStroke();
    specularMaterial(200);
    shininess(200);
    cone(dx * 0.5);
    pop();
}
}

var rand = function()
{
  this.x = ++rand.seed;
  this.y = ++rand.seed;
  var val = Math.sin(this.x * 12.9898 + this.y * 78.233) * 43758.545;
  return (val - Math.floor(val));
}
rand.seed = 0;
