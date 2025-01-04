import "./css/reset.css";
import "./css/global.css";
import "./css/menu.css";
import "./css/hours-location.css";
import "./css/about.css";
import { menuContent } from "./menu";
import { hoursContent } from "./hours-location";
import { aboutContent } from "./about";

const contentPage = document.querySelector("#content");
const navElement = document.querySelector("nav");
const menuBtn = document.querySelector("#menu");
const hoursBtn = document.querySelector("#hours");
const aboutBtn = document.querySelector("#about");

function wipeContentPage() {
  contentPage.replaceChildren();
}

function setTabAsActive(tab) {
  menuBtn.removeAttribute("class");
  hoursBtn.removeAttribute("class");
  aboutBtn.removeAttribute("class");
  tab.classList.add("active");
}

function renderContent(tabContent) {
  contentPage.append(...tabContent);
}

//Set initial page state
setTabAsActive(menuBtn);
renderContent(menuContent);

navElement.addEventListener("click", (e) => {
  if (e.target.id === "menu") {
    wipeContentPage();
    setTabAsActive(menuBtn);
    renderContent(menuContent);
  } else if (e.target.id === "hours") {
    wipeContentPage();
    setTabAsActive(hoursBtn);
    renderContent(hoursContent);
  } else if (e.target.id === "about") {
    wipeContentPage();
    setTabAsActive(aboutBtn);
    renderContent(aboutContent);
  }
});

//utility functions
function addClass(element, className) {
  element.classList.add(className);
}

function createElement(elementType) {
  return document.createElement(elementType);
}

export { addClass, createElement };
