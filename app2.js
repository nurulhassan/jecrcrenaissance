
var batti = new Array();
batti[0] = "img/lamp.png";
batti[1] = "img/llamp.png";


function changeImages() {
  document.getElementsByClassName('llamp').src= batti[y];

  if (y<1) {
    y+=1;
  }
  else if (y===1) {
    y=0;
  }

}

window.onload = function() {
  var y=0;
  setInterval(function() {
    changeImages()
  },1000);

}
