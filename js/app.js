let userScore = 0;
let compScore = 0;
const text = document.getElementById("text");
const imgUser = document.getElementById("imgUser");
const imgComp = document.getElementById("imgComp");
const user = document.getElementById("user");
const comp = document.getElementById("comp");
const buttons = document.querySelectorAll(".action button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.id == "rock") play(0, getRandomNumber());

    if (button.id == "paper") play(1, getRandomNumber());

    if (button.id == "scissors") play(2, getRandomNumber());

    if (button.id == "random") play(getRandomNumber(), getRandomNumber());

    if (button.id == "reset") reset();
  });
});

function play(userRnd, compRnd) {
  imgUser.src = `assets/${userRnd}.png`;
  imgComp.src = `assets/${compRnd}.png`;

  if (userRnd == compRnd) {
    userScore++;
    compScore++;
    text.textContent = "IT IS DRAW";
  } else if (
    (userRnd == 0 && compRnd == 2) ||
    (userRnd == 1 && compRnd == 0) ||
    (userRnd == 2 && compRnd == 1)
  ) {
    userScore++;
    text.textContent = "YOU WON";
  } else {
    compScore++;
    text.textContent = "YOU LOSE";
  }

  user.textContent = userScore;
  comp.textContent = compScore;
}

// Reset Game
function reset() {
  userScore = 0;
  compScore = 0;

  text.textContent = "Start!";
  imgUser.src = `assets/mark.png`;
  imgComp.src = `assets/mark.png`;

  user.textContent = userScore;
  comp.textContent = compScore;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}
