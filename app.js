
var images = new Array();
images[0] = "img/gbulb1.png";
images[1] = "img/bulb1.png";

function changeImage() {
  document.getElementById('ad').src = images[x];
  if (x<1) {
    x+=1;
  }
  else if (x===1) {
    x=0;
  }

}

window.onload = function() {
  var x = 0;
  setInterval(function() {
    changeImage()
  },1000);

}
