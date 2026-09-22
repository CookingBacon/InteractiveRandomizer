let cards = [
  ["The Fool", "New Beginnings"],
  ["The Magician", "Willpower & Potential"],
  ["The Priestess", "Inner Intuition"],
  ["The Empress", "Support & Growth"],
  ["The Emperor","Control & Authority"],
  ["The Hierophant", "Traditional Guidance"],
  ["The Lovers", "Connection & Support"],
  ["The Chariot", "Action & Determination"],
  ["Strength", "Determined Resilience"],
  ["The Hermit", "Self-Reflection"],
  ["Fortune", "Changing Fate"],
  ["Justice", "Accountability"],
  ["The Hanged Man", "Patient Perspective"],
  ["Death", "Transformation"],
  ["Temperance", "Balance"],
  ["The Devil", "Tempting Addiction"],
  ["The Tower", "Sudden Change"],
  ["The Star", "Optimistic Hope"],
  ["The Moon", "Release Uncertainty"],
  ["The Sun", "Succesful Positivity"],
  ["Judgement", "Awakening"],
  ["The World", "Completion"]
];

let pastCard;
let presentCard;
let futureCard;
let pastDrawn = false;
let presentDrawn = false;
let futureDrawn = false;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30, 20, 40);
  fill(255);
  textSize(28);
  text("Three Card Tarot", 400, 50);
  textSize(18);

  //I make different texts show up based on which cards are revealed
  if (!pastDrawn) {
    text("Ask a question and click the cards from left to right for an answer", 400, 85);
  } else if (!presentDrawn) {
    text("Click the Present card", 400, 85);
  } else if (!futureDrawn) {
    text("Click the Future card", 400, 85);
  } else {
    text("Your reading is complete!", 400, 85);
  }

  //Actual cards
  if (pastDrawn) {
    drawCard(pastCard, 150, 130);
  } else {
    drawCardBack(150, 130);
  }
  if (presentDrawn) {
    drawCard(presentCard, 400, 130);
  } else {
    drawCardBack(400, 130);
  }
  if (futureDrawn) {
    drawCard(futureCard, 650, 130);
  } else {
    drawCardBack(650, 130);
  }

  //make cards pretty
  fill(255);
  textSize(20);
  text("Past", 150, 440);
  text("Present", 400, 440);
  text("Future", 650, 440);
  
  if (futureDrawn) {
    textSize(16);
    text("Click anywhere to draw a new reading", 400, 475);
  }
}

//So I don't have to draw each individual card, I can just reuse this one
function drawCard(card, x, y) {
  fill(230);
  rect(x - 100, y, 200, 280);

  fill(30);
  textSize(24);
  text(card[0], x, y + 90);

  textSize(18);
  text(card[1], x, y + 150);
}

function drawCardBack(x, y) {
  fill(80, 50, 100);
  rect(x - 100, y, 200, 280);
  fill(255);
  textSize(28);
  text("Tarot Card", x, y + 140);
}

function mousePressed() {
//reset
  if (pastDrawn && presentDrawn && futureDrawn) {
    pastDrawn = false;
    presentDrawn = false;
    futureDrawn = false;
    pastCard = undefined;
    presentCard = undefined;
    futureCard = undefined;
    return;
  }

  if (!pastDrawn && mouseX > 50 && mouseX < 250 && mouseY > 130 && mouseY < 410){
    pastCard = random(cards);
    pastDrawn = true;
  }

  else if (pastDrawn && !presentDrawn && mouseX > 300 && mouseX < 500 && mouseY > 130 && mouseY < 410){
    presentCard = random(cards);
    presentDrawn = true;
  }
    
  else if (presentDrawn && !futureDrawn && mouseX > 550 && mouseX < 750 && mouseY > 130 && mouseY < 410){
    futureCard = random(cards);
    futureDrawn = true;
  }
}