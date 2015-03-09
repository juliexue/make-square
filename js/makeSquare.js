var HEIGHT = 20;
var WIDTH = 10;
var GRIDSIZE = 32;
var table = new Array(HEIGHT);
for( var i = 0; i < HEIGHT; i++){
  table[i] = new Array(WIDTH);
  for( var j = 0 ; j < WIDTH; j++){
    table[i][j] = 0;
  }
}

window.onload = function(){
  //set the grid size
  var canvasObj = document.getElementById("grid");
  canvasObj.width = WIDTH * GRIDSIZE;
  canvasObj.height = HEIGHT * GRIDSIZE;

  //draw grid lines
  var ctx = canvasObj.getContext("2d");
  ctx.beginPath();
  for(var i = 0; i < WIDTH; i++){
    ctx.moveTo(i*GRIDSIZE, 0);
    ctx.lineTo(i*GRIDSIZE, canvasObj.height);
  }
  for(var i = 0; i < HEIGHT; i++){
    ctx.moveTo(0, i*GRIDSIZE);
    ctx.lineTo(canvasObj.width, i*GRIDSIZE);
  }
  ctx.strokeStyle="LightGray";
  ctx.stroke();
}

