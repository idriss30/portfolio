import "./index.scss";
import baffle from "baffle";

// // create the Dom elements Object
var landingElements = {
  title: document.querySelector(".animated__text"),
  scrollUp: document.querySelector(".scroll__up"),
  aboutSection: document.querySelector(".about__section"),
  projectSection: document.querySelector(".project__section"),
};

// check if user on landing page
if (landingElements.title) {
  // define the text baffle;
  const textBaffle = baffle(landingElements.title);
  textBaffle.set({
    characters: "¯_(ツ)░█▒█▒ ░▒/_/¯@||$&@",
    speed: 100,
  });

  // start the baffle when dom enters
  textBaffle.start();
  textBaffle.reveal(1000);

  // repeat the baffle every 3 seconds with setInterval

  setInterval(() => {
    textBaffle.start();
    textBaffle.reveal(1000);
  }, 3000);
}
//forceSection to scroll to top before loading
window.onload = () => {
  scrollTo(0, 0);
};

// add the scroll to top icpn
if (landingElements.projectSection || landingElements.aboutSection) {
  // add event listener
  document.addEventListener("scroll", () => {
    scrollY
      ? (landingElements.scrollUp.style.display = "block")
      : (landingElements.scrollUp.style.display = "none");
  });

  landingElements.scrollUp.addEventListener("click", () => {
    scrollTo(0, 0);
  });
}
