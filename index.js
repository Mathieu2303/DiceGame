var randomNumer1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSelect1 = "images/dice" + randomNumber1 + ".png";
var imageSelect2 = "images/dice" + randomNumber2 + ".png";

var randomDice1 = document.querySelectorAll("img")[0];
var randomDice2 = document.querySelectorAll ("img")[1];

randomDice1.setAttribute("src", imageSelect1);
randomDice2.setAttribute("src", imageSelect2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}