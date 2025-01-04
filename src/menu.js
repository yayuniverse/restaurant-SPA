import { addClass, createElement } from "./index";

function renderMenu() {
  //morning menu
  const morningHeader = createElement("h1");
  addClass(morningHeader, "menu-header");
  morningHeader.textContent = "Morning (served all day)";

  const morningTable = createElement("div");
  addClass(morningTable, "table");

  //noon menu
  const noonHeader = createElement("h1");
  addClass(noonHeader, "menu-header");
  noonHeader.textContent = "Noon & Later";

  const noonTable = createElement("div");
  addClass(noonTable, "table");

  //drinks
  const drinksHeader = createElement("h1");
  addClass(drinksHeader, "menu-header");
  drinksHeader.textContent = "Drinks";

  const drinksTable = createElement('div')
  addClass(drinksTable, "table")

  return [morningHeader, morningTable, noonHeader, noonTable, drinksHeader, drinksTable];
}

export const menuContent = renderMenu();
