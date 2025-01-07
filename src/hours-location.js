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
  const holidaysHeader = createElement("h2");
  holidaysHeader.textContent = "Holiday Schedule";
  addClass(holidaysHeader, "holidays-header");

  const holidaysList = createElement("ul");
  addClass(holidaysList, "holidays-list");

  createRow(
    "Thanksgiving, Christmas, New Year's Day",
    holidaysList,
    "Closed: "
  );
  createRow("Limited hours posted seasonally", holidaysList);
  createRow("Special brunch service on major holidays", holidaysList);

  //divider
  const hoursDivider = createElement("div")
  addClass(hoursDivider, "hours-divider")

  for (let i = 0; i < 100; i++) {
    const symbol = createElement("p")
    symbol.textContent = "-"

    hoursDivider.append(symbol)
  }

  //location section
  const locationHeader = createElement("h1");
  addClass(locationHeader, "location-header");
  locationHeader.textContent = "Location";

  const locationBody = createElement("p");
  addClass(locationBody, "location-body");
  locationBody.textContent =
    "123 Press Row, Downtown Arts District (Between Gallery Walk & Museum Street)";

  //parking
  const parkingHeader = createElement("h2");
  addClass(parkingHeader, "parking-header");
  parkingHeader.textContent = "Parking";

  const parkingList = createElement("ul");
  addClass(parkingList, "parking-list");

  createRow("Press District Station (2 blocks)", parkingList, "Blue Line: ");
  createRow("12, 15, 45", parkingList, "Bus Routes: ");
  createRow("ADA accessible entrance on Press Row", parkingList);
  createRow("Outdoor seating (weather permitting)", parkingList);

  //contact
  const contactHeader = createElement("h2");
  addClass(contactHeader, "contact-header");
  contactHeader.textContent = "Contact";

  const contactList = createElement("ul");
  addClass(contactList, "contact-list");

  createRow("(555) 555-NEWS", contactList);
  createRow("reservations@sundaypaper.com", contactList);
  createRow("events@sundaypaper.com", contactList);

  return [
    headerText,
    hoursList,
    holidaysHeader,
    holidaysList,
    hoursDivider,
    locationHeader,
    locationBody,
    parkingHeader,
    parkingList,
    contactHeader,
    contactList,
  ];
}

function createRow(text, list, highlightedText = "") {
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
  list.append(row);
}

export const hoursContent = renderHours();
