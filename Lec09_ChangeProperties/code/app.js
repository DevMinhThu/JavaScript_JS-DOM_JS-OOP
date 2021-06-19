function getEl(id) {
  return document.getElementById(id);
}

function turnOn() {
  var den = getEl("theDen");
  den.src = "../img/pic_bulbon.gif";
}

function turnOff() {
  var den = getEl("theDen");
  den.src = "../img/pic_bulboff.gif";
}
