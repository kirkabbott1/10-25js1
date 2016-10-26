// function printNumbers(start, end){
//   var count = start;
//   while (count <= end) {
//     console.log(count);
//     count++;
//   }
// }
// printNumbers(20, 30);

// function printNumbers2(start, end) {
//   for (var count = start; count <= end; count++) {
//   console.log(count);
//   }
// }
// printNumbers2(30, 40);

// function printSquare(size) {
//   for (var i = 0; i < size; i++) {
//       var star = ''
//       for (var count = 0; count < size; count++) {
//         star += '*'
//       }
//       console.log(star)
//     }
//
//   }
// printSquare(5);
function strMult(str, size) {
  var line = '';
  for (var j = 0; j < size; j++) {
    line += str;
  }
  return line;
}
function printbox(width, height) {
  var stars = strMult('*', width);
  var middleLine = '*' + strMult(' ', width - 2) + '*';
  console.log(stars);
  for (var i = 0; i < height - 2; i++) {
    console.log(middleLine);
  }
  console.log(stars);
}

function printBox(width, height) {
  for (var i = 1; i <= height; i++) {
      var star = ''
      var spaces = ''
      for (var count = 1; count <= width; count++) {
        if (i === 1 || i === height) {
          star += '*'
        }
        else {
          star = ' '
        }
      }
      console.log(star)
    }

}
printBox(5, 5);
