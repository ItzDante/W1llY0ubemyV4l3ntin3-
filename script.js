const envelope = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const finalLetterContainer = document.getElementById("final-letter-container");

const letterWindow = document.querySelector(".letter-window");
const finalLetterCard = document.querySelector(".final-letter-card");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const title = document.getElementById("letter-title");
const miniFinalText = document.getElementById("mini-final-text");
const letterButtons = document.getElementById("letter-buttons");
const openFinalLetterBtn = document.getElementById("open-final-letter");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
  letterContainer.style.display = "flex";
setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

noBtn.addEventListener("mouseover", () => {
    const distance = 160;
  const angle = Math.random() * Math.PI * 2;
  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.addEventListener("click", () => {
     title.textContent = "Yippeeee!";
  letterButtons.style.display = "none";
  miniFinalText.style.display = "inline-block";
  openFinalLetterBtn.style.display = "inline-block";
});

openFinalLetterBtn.addEventListener("click", () => {
  letterContainer.style.display = "none";
  finalLetterContainer.style.display = "flex";

  setTimeout(() => {
    finalLetterCard.classList.add("open");
  }, 50);
});
