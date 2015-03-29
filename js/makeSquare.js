var HEIGHT = 20;
var WIDTH = 10;
var GRIDSIZE = 25;
var table = [];
var x, y;
var curPiece, curColor;

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
  startNewPiece();
  colourGrid();
}

function getRandomColorNum(){
  return Math.floor(Math.random()*7)+1;
}

function getRandomPiece(){
   return pieces[Math.floor(Math.random()*4)];
}

function startNewPiece() {
  x = 0;
  y = 5;
  curPiece = getRandomPiece();
  curColor = getRandomColorNum();
  console.log(curPiece);
  colorPiece();
}
function erasePiece(){
  for(var i = 0; i < curPiece[0].length; i++){
    for(var j = 0; j < curPiece[0][i].length; j++){
      if (curPiece[0][i][j] != 0) {
        table[x+i][y+j] = 0;
      }
    }
  }
}

function colorPiece(){
  for(var i = 0; i < curPiece[0].length; i++){
    for(var j = 0; j < curPiece[0][i].length; j++){
      if (curPiece[0][i][j] != 0) {
        table[x+i][y+j] = curColor;
      }
    }
  }
}

function validMove(pX, pY){
  for(var i = 0; i < curPiece[0].length; i++){
    for(var j = 0; j < curPiece[0][i].length; j++){
      if (curPiece[0][i][j] != 0) {
        if(table[pX+i][pY+j]!= 0){
          if(!(0 <= pX && pX <HEIGHT && 0 <= pY && pY < WIDTH)){
            return false;
          }
        }
      }
    }
  }
  return true;
}

function moveBlock(key){
  var valid = false;
  if(key === "up"){
    if(validMove(x-1,y)){
      erasePiece();
      x--;
      valid = true;
    }
  }else if(key === "down"){
    if(validMove(x+1,y)){
      erasePiece();
      x++;
      valid = true;
    }
  }else if(key === "right"){
    if(validMove(x,y+1)){
      erasePiece();
      y++;
      valid = true;
    }
  }else if(key === "left"){
    if(validMove(x,y-1)){
      erasePiece();
      y--;
      valid = true;
    }
  }

  if(valid){
    colorPiece();
  }
  colourGrid();
}
