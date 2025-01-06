import { addClass, createElement } from "./index";

function renderMenu() {
  //morning menu
  const morningHeader = createElement("h1");
  addClass(morningHeader, "menu-header");
  morningHeader.textContent = "Morning (served all day)";

  const morningTable = createElement("div");
  addClass(morningTable, "table");

  //table rows
  createTableRow(
    "Press Proof French Toast",
    "House sourdough, browned butter, preserved citrus",
    "$14",
    morningTable
  );

  createTableRow(
    "Editors' Breakfast",
    "Soft scrambled eggs, house bacon, chili oil, microgreens",
    "$16",
    morningTable
  );

  createTableRow(
    "Deadline Bowl",
    "Ancient grains, soft egg, avocado, pickled onions",
    "$15",
    morningTable
  );

  //noon menu
  const noonHeader = createElement("h1");
  addClass(noonHeader, "menu-header");
  noonHeader.textContent = "Noon & Later";

  const noonTable = createElement("div");
  addClass(noonTable, "table");

  createTableRow(
    "Headlines Sandwich",
    "Rotisserie chicken, bacon jam, arugula, aioli",
    "$17",
    noonTable
  );

  createTableRow(
    "Opinion Section",
    "Rotating chef's daily main",
    "$MP",
    noonTable
  );

  createTableRow(
    "Letters Board",
    "Ancient grains, soft egg, avocado, pickled onions",
    "$24",
    noonTable
  );

  //drinks
  const drinksHeader = createElement("h1");
  addClass(drinksHeader, "menu-header");
  drinksHeader.textContent = "Drinks";

  const drinksTable = createElement("div");
  addClass(drinksTable, "table");

  createTableRow(
    "Late Edition",
    "Cold brew, vanilla, oat milk",
    "$5",
    drinksTable
  );

  createTableRow(
    "Press Room",
    "Fresh juice daily",
    "$7",
    drinksTable
  );

  createTableRow(
    "Editorial Meeting",
    "Champagne cocktail",
    "$12",
    drinksTable
  );

  return [
    morningHeader,
    morningTable,
    noonHeader,
    noonTable,
    drinksHeader,
    drinksTable,
  ];
}

function createTableRow(mealName, mealIngredients, mealPrice, table) {
  const row = createElement("div");
  addClass(row, "row");

  const lineSymbol = createElement("span");
  addClass(lineSymbol, "line-symbol", "row-item");
  lineSymbol.textContent = "❇︎";

  const name = createElement("p");
  addClass(name, "meal-name", "row-item");
  name.textContent = `${mealName}`;

  const ingredients = createElement("p");
  addClass(ingredients, "meal-ingredients", "row-item");
  ingredients.textContent = `${mealIngredients}`;

  const price = createElement("p");
  addClass(price, "meal-price", "row-item");
  price.textContent = `${mealPrice}`;

  table.append(row);
  row.append(lineSymbol, name, ingredients, price);
}

export const menuContent = renderMenu();
