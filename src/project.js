import culinareeBig from "./images/culinaree.png";
import landBig from "./images/landbig.png";
import dozoBig from "./images/dozoBig.png";
import "./project.scss";

const projectElements = {
  culinareeContainer: document.querySelector(".culinaree"),
  landcareContainer: document.querySelector(".landcare"),
  dozoContainer: document.querySelector(".dozo"),
};

// create the project page assets
// create a function and call it for each project

const createProjectImage = (container, imageDesktop, name) => {
  if (container.innerHTML.length > 0) {
    return;
  }
  container.insertAdjacentHTML(
    "beforeend",
    `<img src = ${imageDesktop} alt = ${name} loading ='lazy'/>`
  );
};

if (projectElements.dozoContainer) {
  createProjectImage(
    projectElements.culinareeContainer,
    culinareeBig,
    "culinaree"
  );
  createProjectImage(projectElements.landcareContainer, landBig, "landcare");
  createProjectImage(projectElements.dozoContainer, dozoBig, "dozo");
}
