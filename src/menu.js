const genMenu = () => {
  const contentDiv = document.querySelector("#content");

  contentDiv.replaceChildren();

  const menuDiv = document.createElement("div");
  menuDiv.id = menu;
  const drinkMenu = document.createElement("div");
  drinkMenu.id = 'drink';
  const wineList = document.createElement("div");
  wineList.id = 'wineList';
  const wineTitle = document.createElement("h2");
  wineTitle.id = 'title';
  wineTitle.textContent = "Wine List";
  drinkMenu.appendChild(wineTitle);

  const redWines = document.createElement("div");
  const reds = document.createElement("h3");
  reds.id = 'title';
  reds.textContent = "Red";
  redWines.appendChild(reds);

  const merlot = document.createElement("div");
  const merlotName = document.createElement("p");
  merlotName.id = "wine";
  merlotName.textContent = "Merlot";
  merlot.appendChild(merlotName);
  const merlotDetail = document.createElement("p");
  merlotDetail.textContent = "country, year";
  merlotDetail.id = "detail";
  merlot.appendChild(merlotDetail);

  const bordeaux = document.createElement("div");
  const bordeauxName = document.createElement("p");
  bordeauxName.id = "wine";
  bordeauxName.textContent = "Bordeaux";
  bordeaux.appendChild(bordeauxName);
  const bordeauxDetail = document.createElement("p");
  bordeauxDetail.id = "detail";
  bordeauxDetail.textContent = "country, year";
  bordeaux.appendChild(bordeauxDetail);

  const malbec = document.createElement("div");
  const malbecName = document.createElement("p");
  malbecName.id = "wine";
  malbecName.textContent = "Malbec";
  malbec.appendChild(malbecName);
  const malbecDetail = document.createElement("p");
  malbecDetail.id = "detail";
  malbecDetail.textContent = "country, year";
  malbec.appendChild(malbecDetail);

  redWines.appendChild(merlot);
  redWines.appendChild(bordeaux);
  redWines.appendChild(malbec);

  const whiteWines = document.createElement("div");
  const whites = document.createElement("h3");
  whites.id = 'title';
  whites.textContent = "White";
  whiteWines.appendChild(whites);

  const chardonnay = document.createElement("div");
  const chardonnayName = document.createElement("p");
  chardonnayName.id = "wine";
  chardonnayName.textContent = "Chardonnay";
  chardonnay.appendChild(chardonnayName);
  const chardonnayDetail = document.createElement("p");
  chardonnayDetail.id = "detail";
  chardonnayDetail.textContent = "country, year";
  chardonnay.appendChild(chardonnayDetail);

  const riesling = document.createElement("div");
  const rieslingName = document.createElement("p");
  rieslingName.id = "wine";
  rieslingName.textContent = "Riesling";
  riesling.appendChild(rieslingName);
  const rieslingDetail = document.createElement("p");
  rieslingDetail.id = "detail";
  rieslingDetail.textContent = "country, year";
  riesling.appendChild(rieslingDetail);

  const muscato = document.createElement("div");
  const muscatoName = document.createElement("p");
  muscatoName.id = "wine";
  muscatoName.textContent = "Muscato";
  muscato.appendChild(muscatoName);
  const muscatoDetail = document.createElement("p");
  muscatoDetail.id = "detail";
  muscatoDetail.textContent = "country, year";
  muscato.appendChild(muscatoDetail);

  whiteWines.appendChild(chardonnay);
  whiteWines.appendChild(riesling);
  whiteWines.appendChild(muscato);

  wineList.appendChild(redWines);
  wineList.appendChild(whiteWines);
  drinkMenu.appendChild(wineList);

  const cocktailMenu = document.createElement("div");
  const cocktailTitle = document.createElement("h2");
  cocktailTitle.id = 'title';
  cocktailTitle.textContent = "Cocktails";
  cocktailMenu.appendChild(cocktailTitle);
  const cocktails = document.createElement("div");
  cocktails.className = "container";

  const negroni = document.createElement("div");
  negroni.id = "drink";
  negroni.textContent = "Negroni";
  cocktails.appendChild(negroni);

  const martini = document.createElement("div");
  martini.id = "drink";
  martini.textContent = "Martini";
  cocktails.appendChild(martini);

  const vesper = document.createElement("div");
  vesper.id = "drink";
  vesper.textContent = "Vesper";
  cocktails.appendChild(vesper);

  const oldFashion = document.createElement("div");
  oldFashion.id = "drink";
  oldFashion.textContent = "Old Fashioned";
  cocktails.appendChild(oldFashion);

  const sidecar = document.createElement("div");
  sidecar.id = "drink";
  sidecar.textContent = "Sidecar";
  cocktails.appendChild(sidecar);

  const daquiri = document.createElement("div");
  daquiri.id = "drink";
  daquiri.textContent = "Daquiri";
  cocktails.appendChild(daquiri);

  cocktailMenu.appendChild(cocktails);
  drinkMenu.appendChild(cocktailMenu);
  menuDiv.appendChild(drinkMenu);

  const foodMenu = document.createElement("div");
  const foodTitle = document.createElement("h2");
  foodTitle.id = 'title'
  foodTitle.textContent = "Mains";
  foodMenu.appendChild(foodTitle);

  const itemOne = document.createElement("div");
  const itemOneName = document.createElement("p");
  itemOneName.id = "dish";
  itemOneName.textContent = "dish one";
  itemOne.appendChild(itemOneName);
  const itemOneDetail = document.createElement("p");
  itemOneDetail.id = "detail";
  itemOneDetail.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus.";
  itemOne.appendChild(itemOneDetail);

  const itemTwo = document.createElement("div");
  const itemTwoName = document.createElement("p");
  itemTwoName.id = "dish";
  itemTwoName.textContent = "dish two";
  itemTwo.appendChild(itemTwoName);
  const itemTwoDetail = document.createElement("p");
  itemTwoDetail.id = "detail";
  itemTwoDetail.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus.";
  itemTwo.appendChild(itemTwoDetail);

  const itemThree = document.createElement("div");
  const itemThreeName = document.createElement("p");
  itemThreeName.id = "dish";
  itemThreeName.textContent = "dish three";
  itemThree.appendChild(itemThreeName);
  const itemThreeDetail = document.createElement("p");
  itemThreeDetail.id = "detail";
  itemThreeDetail.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus.";
  itemThree.appendChild(itemThreeDetail);

  foodMenu.appendChild(itemOne);
  foodMenu.appendChild(itemTwo);
  foodMenu.appendChild(itemThree);
  menuDiv.appendChild(foodMenu);
  contentDiv.appendChild(menuDiv);
};

export { genMenu };
