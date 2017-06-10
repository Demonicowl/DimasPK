function World(sizeW, scaleW, worldSeed){
  var cols=floor(sizeW/scaleW);
  var rows=floor(sizeW/scaleW);
  var zoff=0;
  var yoff=0;
  var pg;

  var sizeW=sizeW;
  var scaleW=scaleW;
  var worldSeed=worldSeed;

  var worldArray = new Array(s);
  for (var i = 0; i < s; i++) {
    worldArray[i] = new Array(s);
  }
  this.refreshMap=function(){
    this.updateMap();
    this.drawMap();
  }
  this.updateMap=function(){
    for (var y=0;y<rows;y++){
      var xoff=0;
      for(var x=0;x<cols;x++){
        var index=(x+y*width)*4;
        noiseSeed(worldSeed);
        var noiseME=floor(noise(xoff,yoff)*2);
        //var r=noise(xoff,yoff)*255;
        var r=color(lerpColor(color('rgb(205,133,63)'),color('blue'),noiseME));
        if(red(r)>100){
          noiseSeed(worldSeed+.9);
          if(noise(xoff,yoff)*100<40 && random()*100>50){
            r=color('green');
          }
        }
        xoff += inc;
        worldArray[x][y]=r;
      }
      yoff+=inc;
    }
    this.drawMapToGraphic();
  }
  this.drawMapToGraphic=function(){
    pg=createGraphics(sizeW,sizeW,'WEBGL');
    for (var y=0;y<rows;y++){
      for(var x=0;x<cols;x++){
        pg.fill(worldArray[x][y]);
        pg.stroke(worldArray[x][y]);
        pg.rect(x*scl,y*scl, scl, scl);
      }
    }
  }
  this.drawMap=function(){
    return pg;
  }
  this.updateMap();
  this.drawMapToGraphic();
}
