// function hello(name) {
//   console.log('hello, ' + name);
// hello('kirk');


// function hello(name) {
//   if (!name) {
//     name = 'world';
//   }
//   console.log('hello, ' + name);
//   }
// hello();

// function madlib(name, subject) {
//   console.log( name + "'s favorite subject in school is " + subject;
// }
//
// madlib('kirk', 'js');

function tipAmount(bill, quality) {
  if (quality === 'fair') {
    console.log(bill * .15)
    return bill * .15;

  }
  else if (quality === 'good') {
    return bill * .2;
  }
  else if (quality === 'Bad') {
    return bill * .1;
  }
}
 tipAmount(14563, 'Bad');


function totalAmount(bill, quality) {
  var total = bill + tipAmount(bill, quality);
  return total;
  }
totalAmount(14563, 'Bad');

function splitAmount(bill, quality, ppl) {
  var split = totalAmount(bill, quality)  / ppl;
  console.log(split);
  }
splitAmount(100, 'good', 5);
