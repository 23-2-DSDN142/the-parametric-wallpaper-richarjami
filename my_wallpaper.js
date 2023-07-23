//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(255, 255, 255); //colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

angleMode(RADIANS);

for(let c = 0; c <= 500; c ++)
{
 let randomX1 = (random(-10, 190));
 let randomY1 = (random(-10, 190));
 let randomX2 = (random(-10, 190));
 let randomY2 = (random(-10, 190));
 let squareSize = 40;
 let lineWeight = 4;
 let squareBorder = 0;

 



 let colors = ['#348888', '#22BABB', '#9EF8EE', '#FA7F08', '#F24405'];
 let randomCol = random(colors); 


 let shapes = ['circle', 'square', 'triangle'];
 let shape =  random(shapes);
 
 fill(randomCol);
 strokeWeight(squareBorder);
 stroke(255);
 square(randomX1, randomY1, squareSize, 0);
 square(randomX2, randomY2, squareSize, 0);


}
 let circleInc1 = 20;
 let circleRad1 = 20;

 fill(255);
 for(let x1 = 10; x1 <= 190; x1 += circleInc1) {
   for(let y1 = 10; y1 <= 190; y1 += circleInc1) {
   circle(x1,y1, circleRad1, circleRad1);
 }
}

 let circleInc2 = 20;
 let circleRad2 = 10;

 
 for(let x2 = 10; x2 <= 190; x2 += circleInc2) {
   for(let y2 = 10; y2 <= 190; y2 += circleInc2) {

     let colors = ['#348888', '#22BABB', '#9EF8EE', '#FA7F08', '#F24405'];
     let randomCol = random(colors); 
     fill(randomCol);
   circle(x2,y2, circleRad2, circleRad2);
 }
}
strokeWeight(60)
noFill()
rect(0,0,200,200)

 noLoop();

  
}
