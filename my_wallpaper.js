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
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(255, 255, 255); //colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

let colours = ['#FEDA17', '#E67929', '#009848', '#0066A5', '#E40C72']
let colour = random(colours)
let number = random(0,1);

console.log(number);

strokeWeight(15);
stroke(colour);

if (number > 0.5) {
  line(100,0, 100,200);
}

else  {
  line(0,100, 200,100);
};

  strokeWeight(0);
  fill(colour);
  circle(100, 100, 75);


  fill(255);
  circle(100, 100, 50);

  
}
