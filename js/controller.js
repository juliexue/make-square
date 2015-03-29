document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  var key;
  if (e.keyCode == '38') {
    // up arrow
    key = "up";
  }
  else if (e.keyCode == '40') {
    // down arrow
    key = "down";
  }
  else if (e.keyCode == '37') {
    // left arrow
    key = "left";
  }
  else if (e.keyCode == '39') {
    // right arrow
    key = "right";
  }

  if(key){
    moveBlock(key);
  }
}
