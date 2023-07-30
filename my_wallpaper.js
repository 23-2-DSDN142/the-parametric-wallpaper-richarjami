//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(255, 255, 255); //colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

angleMode(DEGREES);

let colours = ['#1A0E3E', '#1F1A70', '#DB488B', '#FF83F6', '#3ED0EB']
let colour = random(colours)
let number = random(0,1);
let triangleX = 100
let triangleY = 70
let randomRot = random(0,360);


console.log(number);

strokeWeight(0);

for (let sx = 0; sx <= 200; sx = sx + 100) {
  for (let sy = 0; sy <= 200; sy = sy + 100) {

  fill(random(220,240));
  square(sx,sy,100);

  }
}

  stroke(colour);
  fill(colour);
  circle(100, 100, 75);

  
  colorMode(RGB,255,255,255, 0);
  circle(100, 100, 50);

  translate(triangleX, triangleY + 30);
  rotate(randomRot);
  translate(-triangleX, -triangleY - 30);

  fill(colour);
  triangle(triangleX - 20, triangleY, triangleX, triangleY - 30, triangleX + 20, triangleY);
  noFill();
  strokeWeight(5);
  arc(100,100, 100,100, -55,235);

  
  strokeWeight(15);
  line(100,45 ,100,45);
  strokeWeight(12);
  line(100,35 ,100,35);
  strokeWeight(9);
  line(100,25 ,100,25);
  strokeWeight(6);
  line(100,15 ,100,15);
  strokeWeight(3);
  line(100,5 ,100,5);
  
}
