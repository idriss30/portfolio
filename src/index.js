import "./index.scss";
import "./about.scss";
import "./project.scss";
import "./contact.scss";
import baffle from "baffle";
import "@lottiefiles/lottie-player";
import culinareeBig from "./images/culinaree.png";
import landBig from "./images/landbig.png";
import dozoBig from "./images/dozoBig.png";
import "animate.css";

// create a function to block javascript execution

const repeatAnimation = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

// create a function that take a sentence and upload it to the dom
const insertTextAnimation = async (sentence, time, element) => {
  element.innerHTML = " ";
  const sentenceArr = sentence.split("");
  for (let i = 0; i < sentenceArr.length; i++) {
    await repeatAnimation(time);
    element.innerHTML += sentenceArr[i];
  }
};

// create a function to erase the text
const deleteTextAnimation = async (time, element) => {
  let item = element.innerHTML;
  let itemArr = item.split("");
  for (let i = itemArr.length; i > 0; i--) {
    itemArr.pop();
    item = itemArr.join("");
    element.innerHTML = item;
    await repeatAnimation(time);
  }
};

// create a function to change the font color
const changeFontColor = (color, element) => {
  return (element.style.color = color);
};

// // create the Dom elements Object
var domElements = {
  title: document.querySelector(".animated__text"),
  header: document.querySelector("head"),
  lottie: document.querySelector("lottie-player"),
  culinareeContainer: document.querySelector(".culinaree"),
  landcareContainer: document.querySelector(".landcare"),
  dozoContainer: document.querySelector(".dozo"),
  scrollUp: document.querySelector(".scroll__up"),
  aboutSection: document.querySelector(".about__section"),
  projectSection: document.querySelector(".project__section"),
  contactSection: document.querySelector(".contact__section"),
  aboutTitle: document.querySelector(".about__text"),
};

const displayCarousel = async () => {
  // create a greeting Array

  const greetingArray = [
    { text: "Hello", color: "#e20d3f " },
    { text: "Hola", color: "#3e6680" },
    { text: "Salut", color: "white" },
    { text: "Konnichiwa", color: "#c4a79b" },
    { text: "Salam", color: "white" },
  ];

  // define the initial variable;
  let i = 0;
  // make the animation continue;
  while (true) {
    await changeFontColor(greetingArray[i].color, domElements.aboutTitle);
    await insertTextAnimation(
      greetingArray[i].text,
      150,
      domElements.aboutTitle
    );
    await repeatAnimation(1500);
    await deleteTextAnimation(150, domElements.aboutTitle);
    await repeatAnimation(500);
    i++;
    if (i >= greetingArray.length) i = 0;
  }
};

if (domElements.aboutTitle) {
  displayCarousel();
}
// check if user on landing page
if (domElements.title) {
  // define the text baffle;
  const textBaffle = baffle(domElements.title);
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
if (domElements.projectSection || domElements.aboutSection) {
  // add event listener
  document.addEventListener("scroll", () => {
    scrollY
      ? (domElements.scrollUp.style.display = "block")
      : (domElements.scrollUp.style.display = "none");
  });

  domElements.scrollUp.addEventListener("click", () => {
    scrollTo(0, 0);
  });
}
// create the project page assets
// create a function and call it for each project

const createProjectImage = (container, imageDesktop, name) => {
  const element = container.insertAdjacentHTML(
    "beforeend",
    `<img src = ${imageDesktop} alt = ${name}/>`
  );

  return element;
};

if (domElements.culinareeContainer) {
  createProjectImage(domElements.culinareeContainer, culinareeBig, "culinaree");
  createProjectImage(domElements.landcareContainer, landBig, "landcare");
  createProjectImage(domElements.dozoContainer, dozoBig, "dozo");
}
