const affirmations = [
  "You are enough.",
  "You are doing your best.",
  "You deserve good things.",
  "Your feelings are valid.",
  "You are growing every day.",
  "You are stronger than you think."
];

function newAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const affirmation = affirmations[randomIndex];
  document.getElementById("affirmation").textContent = affirmation;
  localStorage.setItem("lastAffirmation", affirmation);
}

// Load saved affirmation
const saved = localStorage.getItem("lastAffirmation");
if (saved) {
  document.getElementById("affirmation").textContent = saved;
}
