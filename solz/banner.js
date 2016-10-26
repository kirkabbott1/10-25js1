function strMultiply(str, size) {
  var line = '';
  for (var j = 0; j < size; j++) {
    line += str;
  }
  return line;
}

function printBanner(text) {
  var width = text.length + 4;
  var height = 3;
  var stars = strMultiply('*', width);
  var middleLine = '* ' + text + ' *';
  console.log(stars);
  for (var i = 0; i < height - 2; i++) {
    console.log(middleLine);
  }
  console.log(stars);
}

printBanner('Welcome to DigitalCrafts');
