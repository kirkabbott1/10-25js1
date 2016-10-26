
function printBox(width, height) {
  var stars = '';
  for (var j = 0; j < width; j++) {
    stars += '*';
  }
  var middleLine = '*';
  for (var j = 0; j < width - 2; j++) {
    middleLine += ' ';
  }
  middleLine += '*';

  console.log(stars);
  for (var i = 0; i < height - 2; i++) {
    console.log(middleLine);
  }
  console.log(stars);
}

printBox(6, 3);
