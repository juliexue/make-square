var HEIGHT = 20;
var WIDTH = 10;
var GRIDSIZE = 25;
var table = [];
var x;
var y;

function init(){
  for( var i = 0; i < HEIGHT; i++){
    table[i] = [];
    for( var j = 0 ; j < WIDTH; j++){
      table[i][j] = 0;
    }
  }
}

function startGame(){
  console.log("Start Game!!");
  init();
  x = 0;
  y = 5;
  table[x][y] = 1;
  colourGrid();
}

function validMove(pX, pY){
  if(0 <= pX && pX <HEIGHT && 0 <= pY && pY < WIDTH){
    return true;
  }
  return false;
}

function moveBlock(key){
  if(key === "up"){
    if(validMove(x-1,y)){
      table[x][y] = 0;
      x--;
      table[x][y] = 1;
    }
  }else if(key === "down"){
    if(validMove(x+1,y)){
      table[x][y] = 0;
      x++;
      table[x][y] = 1;
    }
  }else if(key === "right"){
    if(validMove(x,y+1)){
      table[x][y] = 0;
      y++;
      table[x][y] = 1;
    }
  }else if(key === "left"){
    if(validMove(x,y-1)){
      table[x][y] = 0;
      y--;
      table[x][y] = 1;
    }
  }
  
  colourGrid();
}
