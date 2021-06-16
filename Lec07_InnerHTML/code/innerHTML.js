function getEl(id) {
  return document.getElementById(id);
}

function changeInnerHTML(id, text) {
  var theP = getEl(id);
  theP.innerHTML = text;
}

// handle onclick
function changeContent() {
  changeInnerHTML("theP", "Mr.Rocket");
}
