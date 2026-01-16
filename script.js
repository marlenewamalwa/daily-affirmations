const affirmations = [
  "You are enough.",
  "You are doing your best.",
  "You deserve good things.",
  "Your feelings are valid.",
  "You are growing every day.",
  "You are stronger than you think.",
  "You are allowed to take up space.",
  "Your progress matters."
];


function getAffirmationOfTheDay() {
  const today = new Date().toDateString();
  const index = today.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return affirmations[index % affirmations.length];
}

document.getElementById("affirmation").textContent =
  getAffirmationOfTheDay();



const toggle = document.getElementById("darkToggle");


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙 Dark Mode";
  }
});
