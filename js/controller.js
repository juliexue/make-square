document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  var key;
  if (e.keyCode == '38') {
    // up arrow
    console.log("up");
    key = "up";
  }
  else if (e.keyCode == '40') {
    // down arrow
    console.log("down");
    key = "down";
  }
  else if (e.keyCode == '37') {
    // left arrow
    console.log("left");
    key = "left";
  }
  else if (e.keyCode == '39') {
    // right arrow
    console.log("right");
    key = "right";
  }

  if(key){
    moveBlock(key);
  }
}
