import { addClass, createElement } from "./index";
import image from "./aboutsunday.webp";

function renderAbout() {
  const headerText = document.createElement("h1");
  addClass(headerText, "about-header");
  headerText.textContent = "About";

  const aboutImage = createElement("img");
  addClass(aboutImage, "about-image");
  aboutImage.src = image;

  const aboutBody = createElement("p");
  addClass(aboutBody, "about-body");
  aboutBody.innerHTML = `Sunday Paper began with a simple idea: create a space that captures the leisurely feeling of Sunday morning, every day of the week. Founded in 2025 by former journalist Sarah Chen and chef Michael Rivera, our restaurant combines the warmth of your favorite coffee shop with the sophistication of modern brunch culture. 
    <br><br>Our menu draws inspiration from the ritual of Sunday mornings – that perfect moment when you're lingering over coffee, sharing sections of the newspaper, and enjoying thoughtfully prepared food without rushing. We source our coffee beans from local roasters, our bread from artisanal bakeries, and our produce from farmers within 100 miles of our kitchen. 
    <br><br>Located in the heart of the Arts District, Sunday Paper has become a gathering place for artists, writers, professionals, and food lovers alike. Whether you're starting your day with our house-made pastries, meeting colleagues for lunch, or spending a relaxed afternoon at our coffee bar, we strive to create an experience that makes every day feel like Sunday.`;

  return [headerText, headerText, aboutImage, aboutBody];
}

export const aboutContent = renderAbout();
