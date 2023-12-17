
// SETUP VARIABELEN
var toadElements = [
  document.querySelector(".toad1"),
  document.querySelector(".toad2"),
  document.querySelector(".toad3")
];

var score = 0

//FUNCTIES

// Functie om toads aan het begin onzichtbaar te maken en een random toad zichtbaar te maken
function initializeToads() {
  toadElements.forEach(function (toad) {
    toad.style.visibility = "hidden";
  });

  var randomToad = Math.floor(Math.random() * toadElements.length);
  toadElements[randomToad].style.visibility = "visible";
}

// Functie om het aantal klikken op de toad bij te werken
function updateScore() {
  var ScoreElement = document.querySelector(".score");
  ScoreElement.textContent = "Score: " + score;
}


// Functie voor welke Toad wordt gemept (geklikt)
function ToadGemept() {
  console.log("raak");

  toadElements.forEach(function (toad) {
    toad.style.visibility = "hidden";
  });

  var randomToad = Math.floor(Math.random() * toadElements.length);
  toadElements[randomToad].style.visibility = "visible";


score++;

// Werk het aantal klikken op de Toad bij
updateScore();

// Speel geluid op basis van de score
var audio;

if (score === 1) {
  audio = new Audio("audio/gamesound1.mp3");
} else if (score === 5) {
  audio = new Audio("audio/gamesound2.mp3");
} else if (score === 10) {
  audio = new Audio("audio/gamesound3.mp3");
}

if (audio) {
  audio.play();
}
}


toadElements.forEach(function (toad) {
  toad.addEventListener("click", ToadGemept);
});


// Voer de initialisatiefunctie uit zodat in het begin een random toad zichtbaar is
initializeToads();



/* PLAN VAN AANPAK

Stap1:
functie die de linker Toad laat zien
classlist opdr 1
functie in JS aanroepen
eventlistener luistert naar click aan linker Toad

dezelfde functie aanroepen
maak het in javascript

alles onzichtbaar daarna eerste zichtbaar maken in de functie

Stap 2:
Functie aanpassen met dat hij random 1 van de Toads 
de classlist veranderd
3 eventlisteners
en visible class weghalen

Stap3:
Bij klikken een geluidje
met if else 
Als waarde random is 1 speelt dit geluid af
waarde is 2 speel dat geluid af.

*/