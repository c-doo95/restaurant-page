const genMenu = () => {
  const contentDiv = document.querySelector("#content");

  contentDiv.replaceChildren();

  const menuDiv = document.createElement("div");
  const drinkMenu = document.createElement("div");
  const wineList = document.createElement("div");
  const wineTitle = document.createElement("h2");
  wineTitle.textContent = "Wine List";
  wineList.appendChild(wineTitle);

  const redWines = document.createElement("div");
  const reds = document.createElement("h3");
  reds.textContent = "Red";
  redWines.appendChild(reds);

  const wine = document.createElement("div");
  const wineName = document.createElement("p");
  wineName.id = "wine";
  wine.appendChild(wineName);
  const wineDetail = document.createElement("p");
  wineDetail.textContent = "country, year";
  wineDetail.id = "detail";
  wine.appendChild(wineDetail);

  redWines.appendChild(wine);

  wineList.appendChild(redWines);
  drinkMenu.appendChild(wineList);
  menuDiv.appendChild(drinkMenu);
  contentDiv.appendChild(menuDiv);
};

export { genMenu };
