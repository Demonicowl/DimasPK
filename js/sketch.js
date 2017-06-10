var scl=8;
var inc=0.05;
var s=800;
//var worldSeed=3;
var myW;
var fr;
var img;
var version=1.55;
var frameRt;
var seed=0.5;



function preload(){
  console.log("Version: "+version);
  cols=floor(s/scl);
  rows=floor(s/scl);
  myW=new World(s,scl, seed);
  img=loadImage("images/character.png");
}
function setup(){
  createCanvas(s,s);
  fr = createP('');
}
function draw(){
  //imageMode(CORNER);
  image(myW.drawMap(),0,0);
  //imageMode(CENTER);
  //image(img,mouseX,mouseY,30,30);
  frameRt=(floor(frameRate()));
  fill(lerpColor(color('red'),color('green'),frameRt*0.016667));
  rect(0,s-10,(frameRt*0.016667)*s,10)
  //rect(0,s-10,(frameRt*0.01)*s,10)
}

function mousePressed(){
  seed=random();
  myW.refreshMap();
}
