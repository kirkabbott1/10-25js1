
function starLine(size) {
  var stars = '';
  for (var j = 0; j < size; j++) {
    stars += '*';
  }
  return stars;
}

function printSquare(size) {
  var stars = starLine(size);
  for (var i = 0; i < size; i++) {
    console.log(stars);
  }
}

printSquare(5);
