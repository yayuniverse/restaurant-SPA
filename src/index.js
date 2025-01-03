import "./css/reset.css";
import "./css/global.css";
import "./css/menu.css";
import "./css/hours-location.css";
import "./css/about.css";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";
import { renderHours } from "./hours-location";

const contentPage = document.querySelector("#content");
const menuContent = renderMenu();
const hoursContent = renderHours();
const aboutContent = renderAbout();

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
  contentPage.append(tabContent);
}

const navElement = document.querySelector("nav");
const menuBtn = document.querySelector("#menu");
const hoursBtn = document.querySelector("#hours");
const aboutBtn = document.querySelector("#about");

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