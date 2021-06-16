function getEl(id) {
  return document.getElementById(id);
}

function changeInnerHTML(id, text) {
  var theP = getEl(id);
  theP.innerHTML = text;
}

// ===========
function changeBackgroundColor(id) {
  var the = getEl(id);
  the.style.backgroundColor = "green";
}

function anThe(id, text) {
  var theP = getEl(id);
  theP.style.color = "yellow";
  // theP.style.display = "none";
}

function changeContent(id, content) {
  var theP = getEl(id);
  theP.innerHTML = content;
}

function getInfoStyle(id) {
  var theP = getEl(id);
  return theP.style.backgroundColor;
}

// handle onclick
function click1() {
  changeContent("theP", "Rocket");
}

function click2() {
  changeBackgroundColor("theDiv");
  changeContent("content1", getInfoStyle("theDiv"));
}
