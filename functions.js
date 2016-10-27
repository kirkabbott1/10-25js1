

function factor2(num) {
  var factors = [];
  for (var i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i);

      if (i !== num) {
      factors.push(num / i);
      }

    }
  return factors;
}
console.log(factor2(16));
