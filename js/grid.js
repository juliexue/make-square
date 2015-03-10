//set the grid size
var canvasObj = document.getElementById("grid");
canvasObj.width = WIDTH * GRIDSIZE;
canvasObj.height = HEIGHT * GRIDSIZE;
var ctx = canvasObj.getContext("2d");
drawGrid();
function drawGrid(){
  //draw grid lines
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

function colourGrid(){
  for( var i = 0; i < HEIGHT; i++){
    for( var j = 0 ; j < WIDTH; j++){
      if(table[i][j] == 1){
        ctx.fillStyle = "Blue";
      }else if(table[i][j] == 0){
        ctx.fillStyle = "white";
      }
      ctx.fillRect(j*GRIDSIZE,i*GRIDSIZE,GRIDSIZE,GRIDSIZE);
    }
  }
  drawGrid();
}