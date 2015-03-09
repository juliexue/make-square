function Cell(color){
  this.x = 0;
  this.y = 0;
  this.color = color;
}

Cell.prototype.getColor = function(){
  return this.color;
};
