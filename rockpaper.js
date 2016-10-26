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
  else if (throw1 == "paper" && throw2 == "scissors") {
    return "player 2 won with scissors"
  }
  else {
    return "player 1 paper over rock"
  }
}
console.log(rockPaperScissors("paper", "rock"));
