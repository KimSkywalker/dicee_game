function diceResult() {
let diceNum = Math.floor(Math.random()*6)+1;
let diceImage = "dice" + diceNum + ".png";
return diceNum;
}

document.getElementById("rollDice").onclick = function displayDiceNum () {
  let dice1Result = diceResult();
  let dice2Result = diceResult();
  let newImage1 = "images/" + "dice" + dice1Result + ".png";
  let newImage2 = "images/" + "dice" + dice2Result + ".png";
  document.getElementById("p1Dice").src = newImage1;
  document.getElementById("p2Dice").src = newImage2;
  if(dice1Result > dice2Result){
    document.getElementById("winMessage").innerHTML = "Player 1 Wins!";
  }
  else if (dice2Result > dice1Result){
    document.getElementById("winMessage").innerHTML = "Player 2 Wins!";
  }
  else if (dice1Result === dice2Result) {
    document.getElementById("winMessage").innerHTML = "It's a draw!";
  }
}
