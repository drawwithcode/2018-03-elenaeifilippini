function preload(){
  // put preload code here
}
 var inc = 0.01;
 var yoff=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

}

function draw() {

background(200);
var xoff = 0;






loadPixels();
for ( var x =0; x < width; x ++){

    for( var y = 0; y < height; y ++) {

      var index = (x + y * width) * 4;
      var r= noise(xoff, yoff ) * 255;

      pixels[ index + 0] = r;
      pixels[ index + 1] = 0;
      pixels[ index + 2] = r;
      pixels[ index + 3] = 255;

      xoff += mouseX/1000;
    }
yoff += 0.01;
  }
  updatePixels();


textSize(30);
text("prova a spostare l'antenna", width/2, height/2);



}
