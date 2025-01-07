import { addClass, createElement } from "./index";

function renderHours() {
  //hours section
  const headerText = createElement("h1");
  headerText.textContent = "Hours";
  addClass(headerText, "hours-header");

  const hoursList = createElement("ul");
  addClass(hoursList, "hours-list");

  createRow("7AM - 3PM", hoursList, "Monday - Friday: ");
  createRow("8AM - 4PM", hoursList, "Saturday - Sunday: ");
  createRow("Kitchen closes 30 minutes before closing", hoursList);
  createRow("Coffee service until close", hoursList);

  //holidays section
  const subHeader = createElement("h2");
  subHeader.textContent = "Holiday Schedule";
  addClass(subHeader, "holidays-header");

  const holidaysList = createElement("ul");
  addClass(holidaysList, "holidays-list")

  createRow("Thanksgiving, Christmas, New Year's Day", holidaysList, "Closed: ")
  createRow("Limited hours posted seasonally", holidaysList)
  createRow("Special brunch service on major holidays", holidaysList)

  return [headerText, hoursList, subHeader, holidaysList];
}

function createRow(text, uList, highlightedText = "") {
  const row = createElement("li");
  addClass(row, "hours-row", "no-list-style");

  const days = createElement("span");
  addClass(days, "hours-span");
  days.textContent = highlightedText;

  row.append(days, text);
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
