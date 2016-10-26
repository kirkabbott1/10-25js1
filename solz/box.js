function strMultiply(str, size) {
  var line = '';
  for (var j = 0; j < size; j++) {
    line += str;
  }
  return line;
}

function printBox(width, height) {
  var stars = strMultiply('*', width);
  var middleLine = '*' + strMultiply(' ', width - 2) + '*';
  console.log(stars);
  for (var i = 0; i < height - 2; i++) {
    console.log(middleLine);
  }
  console.log(stars);
}

printBox(6, 3);
