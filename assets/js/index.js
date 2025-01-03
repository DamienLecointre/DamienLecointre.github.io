const lineBig = document.querySelector(".line-big");
const lineSmall = document.querySelector(".line-small");
const emojiContainer = document.querySelector(".emoji-content");
const emoji = document.querySelector(".emoji");
const handBackFist = document.querySelector(".fa-hand-back-fist");
const handHello = document.querySelector(".fa-hand");
const handPointRight = document.querySelector(".fa-hand-point-right");
const nav = document.querySelector("nav");

// console.log(nav);

const setHeroHeight = () => {
  const vh = window.innerHeight * 1;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

setHeroHeight();
window.addEventListener("resize", setHeroHeight);

emojiContainer.addEventListener("click", () => {
  lineBig.style.transform = "translateX(100vw)";
  lineBig.style.transition = "2s ease-in";
  lineSmall.style.transform = "translateX(100vw)";
  lineSmall.style.transition = "2s ease-in";
  emoji.style.transform = "translateX(100vw) ";
  emoji.style.transition = "2s ease-in";
  handBackFist.style.transform = "translateX(100vw) rotate(280deg)";
  handBackFist.style.opacity = 1;
  handBackFist.style.visibility = "visible";
  handBackFist.style.transition = "2s ease-in";
  handPointRight.style.transform = "translateX(100vw)";
  handPointRight.style.opacity = 1;
  handPointRight.style.transition = "2s ease-in";
  nav.style.transform = "translateX(0)";
  nav.style.transition = "1s ease-in";
});
