import { addClass, createElement } from "./index.js";

function renderHours() {
  const headerText = createElement("h1");
  headerText.textContent = "Hours";
  addClass(headerText, "hours-header");

  const list = createElement("ul");
  addClass(list, "hours-list");

  createRow("7AM - 3PM", list, "Monday - Friday: ");
  createRow("8AM - 4PM", list, "Saturday - Sunday: ");
  createRow("Kitchen closes 30 minutes before closing", list);
  createRow("Coffee service until close", list);

  return [headerText, list];
}

function createRow(text, uList, highlightedText = "") {
  const row = createElement("li");
  addClass(row, "hours-row");

  const days = createElement("span");
  addClass(days, "hours-span");
  days.textContent = highlightedText;

  row.append(days, text)
  //   const lineSymbol = createElement("span");
  //   addClass(lineSymbol, "hours-line-symbol");
  //   lineSymbol.textContent = "❇︎";

  //   const name = createElement("p");
  //   addClass(name, "hours-text");
  //   name.textContent = `${text}`;

  //   row.append(lineSymbol, name);
  uList.append(row);
}

export const hoursContent = renderHours();