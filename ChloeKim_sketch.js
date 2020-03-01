var def = {
      x: 124,
      y:14,
         width:120

};
var x = 210;
var y = 100;
var stemHeight = 2;
var image2Height = 325;
var speed =2;





function setup() {
  createCanvas(400, 550);
  img = loadImage('waterer2_illus.png'); // Load the image
  img2 = loadImage('stem_noleaf.png');



}


function preload() {
  soundFormats("wav");
  wateringSound = loadSound("waterdrop.wav")
}


function draw() {
  background(250, 200, 0);
   //can
  image(img, 210, 100, img.width / 2, img.height / 2);
  
 // plant
  image(img2, 165, image2Height, img2.width / 2, img2.height / 2);

  
  fill(255);
  text('Continue To Press', 150, 100);
  
  //window
  noStroke(0);
  fill('#C1971F');
  rect(0,50,140,440);
  fill ('#C0D5FF');
  rect(0,70,120,400);
  fill('#C1971F');
  rect(0,268,140,10);
  rect(25,50,10,440);
  


  // Displays the image at point (0, height/2) at half size
 
  //floor
  fill('#B59633');
  rect(0,510,400,50);
  
 //shadow
  fill('#826300');
  rect(210,519,127,13);
  
  //pot
  fill(150, 50, 50);
  ellipse(200, 525, 100, 15);
  ellipse(200, 440, 145, 15);
  noStroke();
  rect(150, 425, 100, 100);
  rect(127, 400, 145, 40);
  fill(230, 170, 230);

  //soil
  fill(100, 30, 20);
  ellipse(200, 400, 145, 15);

   //stem
  fill(60, 70, 0);
  rect(197, 350, 5, 50, 10, 10, 10, 10);
  rect(197, 360, 5, stemHeight, 10, 10, 10, 10);

  // plant
 image(img2, 165, image2Height, img2.width / 2, img2.height / 2);
  
  //water drips  
  fill(0, 100, 200, 200); //255 is blue
  ellipse(x, y + 85,10);

  // if (mouseIsPressed) {
  //   stemHeight = stemHeight -0.85
  //   image2Height=image2Height -0.8
  // }



  //waterer
  if (mouseIsPressed) {
    //  //draw drip
    fill(0, 100, 200, 200);
    ellipse(x, y + 85, 10);

    //speed of water drops
    y += speed
    
    if (y > 255){
      stemHeight = stemHeight -0.8
      speed += 0.3
    }
    
      if (y>255) {
    
    image2Height=image2Height -0.8
      speed += 0.3
  } 
    if (y > height - 240) {
      // reset
      
      y = 100;
    } 
    
   
  
 
    //speed of water drops
//     y = y + 3
//     if (y > height - 240) {
//       // reset
//       y = 100;
//     }
  
//   }
  }
}

function mousePressed() {
  wateringSound.play(); //variable = mySound 
}
