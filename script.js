const song = document.getElementById("loveSong");

song.addEventListener("loadedmetadata", () => {
  song.currentTime = 146; 
});

let currentCard = 0;
const cards = document.querySelectorAll(".card");

function nextCard() {
  cards[currentCard].classList.remove("active");
  currentCard++;

  if (currentCard < cards.length) {
    cards[currentCard].classList.add("active");

    
    if (currentCard === cards.length - 1) {
      const song = document.getElementById("loveSong");

      if (song) {
        song.currentTime = 146; 
        song.play().catch(() => {
          console.log("Autoplay blocked by browser");
        });
      }
    }
  }
}



let noCount = 0;

const noTexts = [
    "Are you sure? 🥺",
    "Please reconsider 💔",
    "I’ll be sad 😢",
    "Last chance 😭",
    "Babu pleaseee 😭💖"
];

const gifs = [
  "https://media.tenor.com/xUWuCwMMhMMAAAAm/madebychie-mocha-and-milk.webp",
  "https://media.tenor.com/mxFUB2neXSQAAAAm/rabbits.webp",
  "https://media.tenor.com/kq78UYOOPEAAAAAm/cat-sad.webp",
  "https://media.tenor.com/VQSu0SY9c_kAAAAm/distoboy-illustration.webp",
  "https://media.tenor.com/SFy5Za0DyMEAAAAm/erm-fingers.webp"
];

function noClicked() {
  noCount++;

  const noText = document.getElementById("noText");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const gif = document.getElementById("askGif");

  if (noCount <= 5) {
    noText.textContent = noTexts[noCount - 1];
    gif.src = gifs[noCount - 1];

    const scale = 1 + noCount * 0.15;
    yesBtn.style.transform = `scale(${scale})`;
  }

 
  if (noCount === 5) {
    noBtn.style.display = "none";
    noText.textContent = "Yes na lang ang choice 😏";
  }
}


