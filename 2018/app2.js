
var renlogo = new Array();
renlogo[0] = "elmt/ren.png";
renlogo[1] = "elmt/ren1.png";


function changeImages() {
  document.getElementsByClassName('logo').src= renlogo[y];

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
