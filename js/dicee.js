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
  var retval=0;
  retval = Math.floor(Math.random() * 7);

  if (retval == 0 || retval == 7) {retval = getRandom6();}
  return retval;
}

function rollDice(){

    document.querySelector("#dice1").classList.toggle("visible");
    document.querySelector("#dice2").classList.toggle("visible");
    document.querySelector("#dice1gif").classList.toggle("visible");
    document.querySelector("#dice2gif").classList.toggle("visible");

    if (document.querySelector("#dice1").classList.item(1) == "visible"){
      document.querySelectorAll(".btn")[0].textContent = "STOP DICE";
    }
    else {
      document.querySelectorAll(".btn")[0].textContent = "ROLL DICE";
      getRandomDice(1);
    }
}

function getRandomDice(blnReset){

  if (blnReset==0){
    rndDice1 = 1;
    rndDice2 = 1;
    document.querySelector("#dice1").classList.remove("visible");
    document.querySelector("#dice2").classList.remove("visible");
    document.querySelector("#dice1gif").classList.add("visible");
    document.querySelector("#dice2gif").classList.add("visible");
    document.querySelectorAll(".btn")[0].textContent = "ROLL DICE";
  }
  else{
    rndDice1 = getRandom6();
    rndDice2 = getRandom6();
  }

  document.querySelector("#dice1").setAttribute("src", "images/" + "dice" + rndDice1 + ".png");
  document.querySelector("#dice2").setAttribute("src", "images/" + "dice" + rndDice2 + ".png");
  showWinner(rndDice1, rndDice2);
}

function showWinner(val1, val2){
  var audio = new Audio('sounds/applause.wav');

  if (val1 > val2) {
    document.querySelector("#p1").classList.remove("visible");
    document.querySelector("#p2").classList.add("visible");
    audio.STOP;
    audio.play();
  }
  else if (val2 > val1) {
    document.querySelector("#p1").classList.add("visible");
    document.querySelector("#p2").classList.remove("visible");
    audio.STOP;
    audio.play();
  }
  else {
    document.querySelector("#p1").classList.add("visible");
    document.querySelector("#p2").classList.add("visible");
  }
}
