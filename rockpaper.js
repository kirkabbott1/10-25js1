function rockPaperScissors(throw1, throw2) {
  if (throw1 == throw2) {
    return "draw";
  }
  if (throw1 == "rock" && throw2 == "scissors") {
    return "player 1"
  }
  else if (throw1 == "rock" && throw2 == "paper"){
    return "player 2"
  }
  else if (throw1 == "scissors" && throw2 == "rock") {
    return "player 2 won with rock over scissors"
  }
  else if (throw1 === "scissors" && throw2 === "paper") {
    return "player 1 wins with scissors over paper"
  }
  else if (throw1 == "paper" && throw2 == "scissors") {
    return "player 2 won with scissors"
  }
  else {
    return "player 1 paper over rock"
  }
}


beats('rock', 'scissors')
beats('rock', 'paper')
beats('rock', 'rock')

console.log(rockPaperScissors("paper", "rock"));

function rockPaper2(throw1, throw2) {
   if (throw1 == throw2) {
       return 'draw';
   }
   if (throw1 == 'rock') {
        if (throw2 == 'scissors') {
           return 'player1';
       } else {
           return 'player2';
       }
   } else if (throw2 == 'rock') {
       if (throw1 == 'scissors') {
           return 'player2';
       } else {
           return 'player1';
       }
   } else if (throw1 == 'scissors') {
       return 'player1';
   } else {
       return 'player2';
   }
}

function positiveNumbers(arr) {
  for (var i = 0; i < arr.length; i++) {

  }

}
