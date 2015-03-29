var HEIGHT = 20;
var WIDTH = 10;
var GRIDSIZE = 25;
var table = [];
var x, y;
var curPiece, curColor;
var curState = 0;

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
  return Math.floor(Math.random()*(colors.length-1))+1;
}

function getRandomPiece(){
   return pieces[Math.floor(Math.random()*pieces.length)];
}

function startNewPiece() {
  x = 0;
  y = 5;
  curState = 0;
  curPiece = getRandomPiece();
  curColor = getRandomColorNum();
  console.log(curColor+":"+colors[curColor]);
  console.log(curPiece);
  colorPiece();
}

function erasePiece(){
  for(var i = 0; i < curPiece[curState].length; i++){
    for(var j = 0; j < curPiece[curState][i].length; j++){
      if (curPiece[curState][i][j] != 0) {
        table[x+i][y+j] = 0;
      }
    }
  }
}

function colorPiece(){
  for(var i = 0; i < curPiece[curState].length; i++){
    for(var j = 0; j < curPiece[curState][i].length; j++){
      if (curPiece[curState][i][j] != 0) {
        table[x+i][y+j] = curColor;
      }
    }
  }
}

function validMove(pX, pY, state){
  if(!(0 <= pX && pX < HEIGHT && 0 <= pY && pY < WIDTH)){
    return false;
  }
  if(!(0 <= (pX+curPiece[state].length-1) && (pX+curPiece[state].length-1) < HEIGHT)){
    return false;
  }
  for(var i = 0; i < curPiece[state].length; i++){
    if(!(0 <= (pY+curPiece[state][i].length-1) && (pY+curPiece[state][i].length-1) < WIDTH)){
      return false;
    }
    for(var j = 0; j < curPiece[state][i].length; j++){
      if((curPiece[state][i][j] != 0)&&(table[pX+i][pY+j]!= 0)){
          return false;
      }
    }
  }
  return true;
}

function makeMove(pX, pY){
  if(validMove(pX, pY, curState)){
    x = pX;
    y = pY;
  }
}

function validRotate(){
  var tempState = curState + 1;
  if(tempState >= curPiece.length){
    tempState = 0;
  }
  if(validMove(x, y, tempState)){
    curState = tempState;
  }
}

function moveBlock(key){
  erasePiece();
  if(key === "up"){
    validRotate();
  }else if(key === "down"){
    makeMove(x+1, y);
  }else if(key === "right"){
    makeMove(x, y+1);
  }else if(key === "left"){
    makeMove(x, y-1);
  }
  var done = validMove(x+1,y, curState)
  colorPiece();
  colourGrid();
  if(!done){
    startNewPiece();
  }
}
