// SETUP VARIABELEN
var toadElement1 = document.querySelector(".toad1");
var toadElement2 = document.querySelector(".toad2");
var toadElement3 = document.querySelector(".toad3");

var toadElements = [toadElement1, toadElement2, toadElement3];

var score = 0;

// Functie om toads aan het begin onzichtbaar te maken en een random toad zichtbaar te maken
function initializeToads() {
  toadElement1.style.visibility = "hidden";
  toadElement2.style.visibility = "hidden";
  toadElement3.style.visibility = "hidden";

  var randomToad = Math.floor(Math.random() * toadElements.length);
  toadElements[randomToad].style.visibility = "visible";
}

// Functie om het aantal klikken op de toad bij te werken
function updateScore() {
  var scoreElement = document.querySelector(".score");
  scoreElement.textContent = "Score: " + score;
}

// Functie voor welke Toad wordt gemept (geklikt)
function ToadGemept() {
  console.log("raak");

  // Verberg alle toads
  toadElement1.style.visibility = "hidden";
  toadElement2.style.visibility = "hidden";
  toadElement3.style.visibility = "hidden";

  // Laat de juiste toad zien op basis van de voorwaarden
  if (toadElement1.style.visibility === "visible") {
    toadElement2.style.visibility = "hidden";
    toadElement3.style.visibility = "hidden";
  } else if (toadElement2.style.visibility === "visible") {
    toadElement1.style.visibility = "hidden";
    toadElement3.style.visibility = "hidden";
  } else if (toadElement3.style.visibility === "visible") {
    toadElement1.style.visibility = "hidden";
    toadElement2.style.visibility = "hidden";
  }

  // Laat een willekeurige toad zien
  var randomToad = Math.floor(Math.random() * toadElements.length);
  toadElements[randomToad].style.visibility = "visible";

  // Verhoog de score
  score++;

  // Werk het aantal klikken op de Toad bij
  updateScore();

  // Speel geluid op basis van de score
  var audio;

  if (score % 10 === 0) {
    // Punten zoals 10, 20, 30, enz. krijgen gamesound3
    audio = new Audio("audio/gamesound3.mp3");
  } else if (score % 5 === 0) {
    // Punten zoals 5, 15, 25, enz. krijgen gamesound2
    audio = new Audio("audio/gamesound2.mp3");
  } else {
    // Alle andere punten krijgen gamesound1
    audio = new Audio("audio/gamesound1.mp3");
  }

  // Geluid afspelen als het aanwezig is
  if (audio) {
    audio.play();
  }
}

// Voeg klikgebeurtenis toe aan elke Toad
toadElement1.addEventListener("click", ToadGemept);
toadElement2.addEventListener("click", ToadGemept);
toadElement3.addEventListener("click", ToadGemept);

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