function tipAmount(bill, service) {
  if (service === 'good') {
    return bill * 0.2;
  } else if (service === 'fair') {
    return bill * 0.15;
  } else if (service === 'poor') {
    return bill * 0.1;
  }
}

function totalAmount(bill, service) {
  var tip = tipAmount(bill, service);
  return tip + bill;
}

function splitAmount(bill, service, people) {
  var total = totalAmount(bill, service);
  return total / people;
}

var amount = splitAmount(100, 'good', 7);
var display = amount.toFixed(2);
console.log('Total for each: ' + display);
