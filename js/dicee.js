var x = window.matchMedia("(max-width: 600px)");
var rndDice1 = 0;
var rndDice2 = 0;

mediaFunction(x);
x.addListener(mediaFunction);

function mediaFunction(x) {
  if (x.matches) {
    document.querySelectorAll(".btn")[0].classList.add("btn-sm");
    document.querySelectorAll(".btn")[0].classList.remove("btn-lg");
    document.querySelectorAll(".btn")[1].classList.add("btn-sm");
    document.querySelectorAll(".btn")[1].classList.remove("btn-lg");
  } else {
    document.querySelectorAll(".btn")[0].classList.remove("btn-sm");
    document.querySelectorAll(".btn")[0].classList.add("btn-lg");
    document.querySelectorAll(".btn")[1].classList.remove("btn-sm");
    document.querySelectorAll(".btn")[1].classList.add("btn-lg");
  }
}

function getRandom6(){
  return Math.floor((Math.random() * 6) + 1);
}

function drawDice(){

    rndDice1 = 6;
    rndDice2 = 6;
    document.querySelector("#dice1").classList.remove("visible");
    document.querySelector("#dice2").classList.remove("visible");
    document.querySelector("#dice1gif").classList.add("visible");
    document.querySelector("#dice2gif").classList.add("visible");

    document.querySelectorAll(".btn")[0].textContent = "ROLL DICE";
    document.querySelectorAll(".btn")[0].classList.remove("btn-danger");
    document.querySelectorAll(".btn")[0].classList.add("btn-success");
    showWinner(rndDice1, rndDice2);
}

function rollDice(){
  var audio = new Audio('sounds/rolldice.wav');

    document.querySelector("#dice1").classList.toggle("visible");
    document.querySelector("#dice2").classList.toggle("visible");
    document.querySelector("#dice1gif").classList.toggle("visible");
    document.querySelector("#dice2gif").classList.toggle("visible");

    if (document.querySelector("#dice1").classList.item(1) == "visible"){
      audio.STOP;
      audio.play();
      populateStopDice();
    }
    else {
      populateRollDice();
      getRandomDice();
    }
}

function populateRollDice(){

  document.querySelectorAll(".btn")[0].textContent = "ROLL DICE";
  document.querySelectorAll(".btn")[0].classList.remove("btn-danger");
  document.querySelectorAll(".btn")[0].classList.add("btn-success");
}

function populateStopDice(){
  document.querySelector("h2").textContent = "Dice Rolling!"
  document.querySelector("#p1").classList.add("visible");
  document.querySelector("#p2").classList.add("visible");

  document.querySelectorAll(".btn")[0].textContent = "STOP DICE";
  document.querySelectorAll(".btn")[0].classList.remove("btn-success");
  document.querySelectorAll(".btn")[0].classList.add("btn-danger");
}

function getRandomDice(){
  rndDice1 = getRandom6();
  rndDice2 = getRandom6();
  showWinner(rndDice1, rndDice2);
}

function showWinner(val1, val2){
  var audio = new Audio('sounds/ding.wav');

  document.querySelector("#dice1").setAttribute("src", "images/" + "dice" + rndDice1 + ".png");
  document.querySelector("#dice2").setAttribute("src", "images/" + "dice" + rndDice2 + ".png");

  if (val1 > val2) {
    document.querySelector("#p1").classList.remove("visible");
    document.querySelector("#p2").classList.add("visible");
    document.querySelector("h2").textContent = "Player 1 Wins!"
    audio.STOP;
    audio.play();
  }
  else if (val2 > val1) {
    document.querySelector("#p1").classList.add("visible");
    document.querySelector("#p2").classList.remove("visible");
    document.querySelector("h2").textContent = "Player 2 Wins!"
    audio.STOP;
    audio.play();
  }
  else {
    document.querySelector("#p1").classList.add("visible");
    document.querySelector("#p2").classList.add("visible");
    document.querySelector("h2").textContent = "Draw!"
  }
}
