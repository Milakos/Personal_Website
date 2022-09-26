  var cam;
  let slider;
  let checkbox;
  
  var fillColor = 0;
  var backColor = 255 ;
  
function setup()
{
    UI();
}

  
function draw()
{
    let val = slider.value();
   
    background(backColor);
    let gridSize = int(map(val,0,width,10,20));
    
    cam.loadPixels();
    for (let y=0; y < cam.height; y+=gridSize)
    {
      for(let x=0; x < cam.width; x+=gridSize)
      {
        let index = (y * cam.width + x) * 4;
        let r = cam.pixels[index];
        let dia = map(r,0,255, gridSize,2);
        // translate(0.001,0,0);
        //rotate(0.00001);
        push();
        fill(fillColor);
        strokeWeight(4);
            
        if (checkbox.checked()== true) 
        {
          strokeWeight(4);
           ellipse(x+gridSize/4,y+gridSize/4, dia);    
        } 
        else 
        {
          rect(x+gridSize/2,y+gridSize/2, dia);
        } 
        pop();
      }
    }
}
   
    function ColorBackGround()
    {
    let r = int(random(0, 255));
    let g = int(random(0, 255));
    let b = int(random(0, 255));
    backColor = color(r, g, b);
    }
  
    function ColorPixels()
    {
      let r = int(random(0, 255));
      let g = int(random(0, 255));
      let b = int(random(0, 255));
      fillColor = color(r, g, b);
    }
    
    function Capture()
    { 
    save('myCanvas.png');
    return false;
    }
    
    function UI()
    {
          createCanvas(windowWidth, windowHeight);
    noStroke();
    cam = createCapture(VIDEO);
    cam.size(windowWidth, windowHeight);
    cam.hide();
    
    textButton = createButton('BackGround');
    textButton.position(10, windowHeight - 100);
    textButton.size(200,50);
    textButton.addClass('interaction-btn');
    textButton.mousePressed(ColorBackGround);
    
    textButton = createButton('Pixel Me');
    textButton.position(10, windowHeight - 180);
    textButton.size(200,50);
    textButton.addClass('interaction-btn');
    textButton.mousePressed(ColorPixels);
    
    textButton = createButton('Portrait U');
    textButton.position(10, windowHeight - 260);
    textButton.size(200,50);
    textButton.addClass('interaction-btn');
    textButton.mousePressed(Capture); 
    
    slider = createSlider(0, width, 100);
    slider.position(10, windowHeight - 305);
    slider.style('width', '200px');
    
    checkbox = createCheckbox('Pixel Shape', false);
    checkbox.position(10,windowHeight - 350);
    checkbox.addClass('interaction-label');
    }
