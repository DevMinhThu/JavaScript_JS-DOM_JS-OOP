function timSoLonNhat(a, b, c) {
  var tam = a;
  if (b > tam) {
    tam = b;
  }
  if (c > tam) {
    tam = c;
  }
  return tam;
}

function onClick() {
  var big = timSoLonNhat(8, 15, 6);
  console.log(big);
}

onClick();
