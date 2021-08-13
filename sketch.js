let myfont;
let sun_texture;
let nebula;
let ring_nebula;
let bg;
let supernova;
let neutron_star;
let blackhole;
function preload() {
  myfont = loadFont('assets/radiance-regular.otf');
  white_sun = loadImage('assets/white-sun-cut2.jpg');
  nebula = loadImage('assets/nebula.png');
  ring_nebula = loadImage('assets/planetary nebula.jpg');
  supernova = loadImage('assets/supernova2.jpg');
  neutron_star = loadImage('assets/neutron_star.png');
  blackhole = loadImage('assets/blackhole.png');
}

let s_age,s_mass;
function setup() {
  preload();
  createCanvas(1400, 800,WEBGL);
  s_age = createSlider(0,300,50,5);
  s_mass = createSlider(0.5,30,1,0.1);
  s_age.size(900,10);
  s_age.position(50,750);
  s_mass.size(900,10);
  s_mass.position(50,780);
  
  
}

let rX = 1;
let fill_r;
let fill_g;
let fill_b;
let star_size;
let star_text , star_stat , star_age;
function draw() {
  background(0);
  let val_s_age = s_age.value();
  let val_s_mass = s_mass.value();
  star_size = map(val_s_mass,0.5,30,30,250);

  push();
  noStroke();
  if (val_s_age <= 50) {
    // nebula
    star_stat = "Nebula";
    star_age = "Birth";
    texture(nebula);
    plane(star_size*2.5,star_size*2.5);
  } else if (val_s_mass <= 2 && val_s_age >= 210) {
    // end of small star
    rotateX(rX);
    rotateZ(rX);
    let multiply = 1;
    if (val_s_age <= 240) {
        // red giant
        star_stat = "Red Giant";
        star_age = "Old age";
        multiply = map(val_s_age,210,240,1,3);
        fill_g = map(val_s_mass,0.5,9,0,255);
        fill_r = map(val_s_age,210,240,0,255);
        tint(255,fill_g-fill_r,0);
    } else if (val_s_age <= 270) {
        // white dwarf
        star_stat = "White Dwarf";
        star_age = "Death";
        multiply = map(val_s_age,240,270,3,0.5);
        let fill_w = map(val_s_age,240,270,0,255);
        tint(255,0+fill_w,0+fill_w);
    } else {
        // black dwarf
        star_stat = "Black Dwarf";
        star_age = "Remnant";
        multiply = 0.5;
        let fill_b = map(val_s_age,270,300,0,255);
        tint(255-fill_b,255-fill_b,255-fill_b);
    }
    texture(white_sun);
    sphere(star_size*multiply);
    rX += 0.01;
  } else if (val_s_mass <= 9 && val_s_mass > 2 && val_s_age >= 200) {
    // end of medium star
      let multiply;
      if (val_s_age <= 260) {
          star_stat = "Red Giant";
          star_age = "Old age";
          // red giant
          rotateX(rX);
          rotateZ(rX);
          fill_g = map(val_s_mass,0.5,9,0,255);
          fill_r = map(val_s_age,200,260,0,255);
          multiply = map(val_s_age,200,260,1,2);
          tint(255,fill_g-fill_r,0);
          texture(white_sun);
          sphere(star_size*multiply);
          rX += 0.005;
      } else {
        star_stat = "Planetary nebula";
        star_age = "Death";
          // planetary nebula
          texture(ring_nebula);
          plane(star_size*5,star_size*5);
      }
  } else if (val_s_mass <= 25 && val_s_mass > 9 && val_s_age >= 190) {
    // end of big star
      let multiply = 1;
      if (val_s_age <= 220) {
          // red giant
          star_stat = "Red Giant";
          star_age = "Old age";
          rotateX(rX);
          rotateZ(rX);
          multiply = map(val_s_age,160,220,1,1.4);
          fill_r = map(val_s_age,160,220,0.255);
          fill_b = map(val_s_mass,9,25,0,255);
          tint(255,255-fill_r,fill_b-fill_r);
          texture(white_sun);
          sphere(star_size*multiply);
          rX += 0.005;
      } else if (val_s_age <= 250) {
          // supernova
          star_stat = "Supernova";
          star_age = "Death";
          texture(supernova);
          plane(star_size*4,star_size*4);
      } else {
          // neutron star
          star_stat = "Neutron Star";
          star_age = "Remnant";
          texture(neutron_star);
          plane(star_size*2.5,star_size*2.5);
      }
  } else if (val_s_mass > 25 && val_s_age >= 180) {
    // end of large star
    let multiply = 1;
    if (val_s_age <= 210) {
        // red giant
        star_stat = "Red Giant";
        star_age = "Old age";
        rotateX(rX);
        rotateZ(rX);
        multiply = map(val_s_age,180,210,1,1.4);
        fill_r = map(val_s_age,180,210,0.255);
        fill_b = map(val_s_mass,25,30,0,255);
        tint(255,255-fill_r,fill_b-fill_r);
        texture(white_sun);
        sphere(star_size*multiply);
        rX += 0.005;
    } else if (val_s_age <= 240) {
        // supernova
        star_stat = "Supernova";
        star_age = "Death";
        texture(supernova);
        plane(star_size*4,star_size*4);
    } else {
        // blackhole
        star_stat = "Blackhole";
        star_age = "Remnant";
        texture(blackhole);
        plane(star_size*2.5,star_size*2.5);
    }
  } else {
    // living star
    star_stat = "Star";
    star_age = "Main Sequence";
    rotateX(rX);
    rotateZ(rX);
    if (val_s_mass <= 9) {
      fill_g = map(val_s_mass,0.5,9,0,255);
      tint(255,fill_g,0);
    } else if (val_s_mass <= 25) {
      fill_b = map(val_s_mass,9,25,0,255);
      tint(255,255,fill_b);
    } else {
      fill_r = map(val_s_mass,25,30,0,255);
      tint(255-fill_r,255-fill_r,255);
    }
    texture(white_sun);
    sphere(star_size);
    rX += 0.005;
  }
  
  pop();
  
  
  textSize(20);
  fill(255);
  textFont(myfont);
  textAlign(LEFT,TOP);
  text("Star age : " + star_age,-150+510,345);
  text("Star mass: " + val_s_mass + " of the Sun",-150+510,375); 

  if (val_s_mass <= 2) {
      star_size = "Small Star";
  } else if (val_s_mass <= 9) {
      star_size = "Medium Star";
  } else if (val_s_mass <= 25) {
      star_size = "Large Star";
  } else {
      star_size = "Massive Star";
  }
  textSize(48);
  text(star_size,-580,-380);
  text(star_stat,-580,-340);
}
