import "./contact.scss";
import axios from "axios";

// grab the form from the server
const formElement = document.querySelector("form");
const popup = document.querySelector(".contact__popup");
const popupText = document.querySelector(".contact__popup p");
const popupClose = document.querySelector(".contact__popup span");

// create a function to hide the timeout after 3s

const hidePopup = () => {
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
};

// disable the popup when clicking close
if (popup) {
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });
}
// create a function to submit
// add an event listener to the dom to listen to the onSubmit form

if (formElement) {
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    formElement.reset();

    axios
      .post("https://idrisscissoko.com/api/message", {
        name: formElement.name.value,
        email: formElement.email.value,
        message: formElement.message.value,
      })
      .then((res) => {
        if (res.data.error) {
          popupText.innerText =
            "your message could not be sent. Please use hello@idrisscissoko.com";
          popup.style.display = "block";
          hidePopup();
        } else if (res.data.message) {
          popup.style.display = "block";
          hidePopup();
        } else {
          popupText.innerText = "body is empty";
          popup.style.display = "block";
        }
      })
      .catch((err) => console.log(err));
  });
}
