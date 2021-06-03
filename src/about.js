import "./about.scss";

// create the domElements
const aboutElements = {
  lottie: document.querySelector("lottie-player"),
  aboutTitle: document.querySelector(".about__text"),
  aboutPicture: document.querySelector(".about__section-picture"),
};

// create a function to block javascript execution

const repeatAnimation = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

// create a function that take a sentence and upload it to the dom
const insertTextAnimation = async (sentence, time, element) => {
  let i = 0;
  while (i < sentence.length) {
    await repeatAnimation(time);
    element.innerHTML += sentence.charAt(i);
    i++;
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
    await changeFontColor(greetingArray[i].color, aboutElements.aboutTitle);
    await insertTextAnimation(
      greetingArray[i].text,
      150,
      aboutElements.aboutTitle
    );
    await repeatAnimation(1500);
    await deleteTextAnimation(150, aboutElements.aboutTitle);
    await repeatAnimation(500);
    i++;
    if (i >= greetingArray.length) i = 0;
  }
};

// start executing the typing when item load
window.onload = () => {
  if (aboutElements.aboutTitle) {
    scrollTo(0, 0);
    displayCarousel();
  }
};
