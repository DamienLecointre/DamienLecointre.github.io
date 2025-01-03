// const textContent = document.querySelector(".text-content");
const lineBig = document.querySelector(".line-big");
const lineSmall = document.querySelector(".line-small");
const emojiContainer = document.querySelector(".emoji-content");
const emoji = document.querySelector(".emoji");
// const emojiHands = document.querySelector(".emoji-hands");
const handBackFist = document.querySelector(".fa-hand-back-fist");
const handHello = document.querySelector(".fa-hand");
const handPointRight = document.querySelector(".fa-hand-point-right");
const nav = document.querySelector("nav");

// console.log(nav);

emojiContainer.addEventListener("click", () => {
  // emojiContainer.classList.add("active");
  lineBig.style.transform = "translateX(100vw)";
  lineBig.style.transition = "2s ease-in-out";
  lineSmall.style.transform = "translateX(100vw)";
  lineSmall.style.transition = "2s ease-in-out";
  emoji.style.transform = "translateX(100vw)";
  emoji.style.transition = "2s ease-in-out";
  // emoji.style.animation = "none";
  // emojiHands.style.transform = "translateX(900%)";
  // emojiHands.style.transition = "1s ease-in-out";
  // handBackFist.classList.add("show");
  handBackFist.style.transform = "translateX(100vw) rotate(280deg)";
  handBackFist.style.transition = "2s ease-in-out";
  // handBackFist.style.animation = "none";
  // handHello.style.transform = "translateX(100vw)";
  // handHello.style.transition = "2s ease-in-out";
  // handHello.style.animation = "none";
  handPointRight.style.transform = "translateX(100vw)";
  handPointRight.style.opacity = 1;
  handPointRight.style.transition = "2s ease-in-out";
  // handPointRight.style.animation = "none";
  nav.style.transform = "translateX(0)";
  nav.style.transition = "1.2s ease-in-out";
});
