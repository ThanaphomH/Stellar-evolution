let s_age,s_mass;
let myfont;
let sun_texture;
function preload() {
  myfont = loadFont('assets/Inconsolata.ttf');
  sun_texture = loadImage('assets/sun_texture.png');
}

function setup() {
  preload();
  createCanvas(1200, 800,WEBGL);
  s_age = createSlider(50,300,50,10);
  s_mass = createSlider(0.5,30,1,0.1);
  s_age.size(390,10);
  s_age.position(50,750);
  s_mass.size(390,10);
  s_mass.position(50,780);
  
  
}

let rX = 1;
function draw() {
  background(220);
  let val_s_age = s_age.value();
  let val_s_mass = s_mass.value();

  push();
  if (val_s_mass <= 2) {
    let fill_g = map(val_s_mass,0.5,2,0,128);
    tint(255,fill_g,0);
    
  }
  noStroke();
  texture(sun_texture);
  rotateX(rX);
  rotateZ(rX);
  sphere(val_s_age);
  pop();
  
  rX += 0.01;
  textSize(16);
  fill(0);
  textFont(myfont);
  textAlign(LEFT,TOP);
  text("Star age : " + val_s_age,-150,350);
  text("Star mass: " + val_s_mass + " of the Sun",-150,380); 
}
