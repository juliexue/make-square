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
  return Math.floor(Math.random()*colors.length-1)+1;
}

function getRandomPiece(){
   return pieces[Math.floor(Math.random()*pieces.length)];
}

function startNewPiece() {
  x = 0;
  y = 5;
  curPiece = getRandomPiece();
  curColor = getRandomColorNum();
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
  if(!(0 <= pX && pX < HEIGHT && 0 <= pY && pY < WIDTH)){
    return false;
  }
  if(!(0 <= (pX+curPiece[0].length-1) && (pX+curPiece[0].length-1) < HEIGHT)){
    return false;
  }
  for(var i = 0; i < curPiece[0].length; i++){
    if(!(0 <= (pY+curPiece[0][i].length-1) && (pY+curPiece[0][i].length-1) < WIDTH)){
      return false;
    }
    for(var j = 0; j < curPiece[0][i].length; j++){
      if((curPiece[0][i][j] != 0)&&(table[pX+i][pY+j]!= 0)){
          return false;
      }
    }
  }
  return true;
}

function moveBlock(key){
  var valid = false;
  erasePiece();
  if(key === "up"){
    if(validMove(x-1,y)){
      x--;
      valid = true;
    }
  }else if(key === "down"){
    if(validMove(x+1,y)){
      x++;
      valid = true;
    }
  }else if(key === "right"){
    if(validMove(x,y+1)){
      y++;
      valid = true;
    }
  }else if(key === "left"){
    if(validMove(x,y-1)){
      y--;
      valid = true;
    }
  }

  colorPiece();
  colourGrid();
}
