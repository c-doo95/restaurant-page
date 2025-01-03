const genHome = () => {
  const contentDiv = document.querySelector("#content");

  contentDiv.replaceChildren();

  const homeDiv = document.createElement("div");
  const displayImg = new Image();
  displayImg.src =
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  homeDiv.appendChild(displayImg);
  const restoName = document.createElement("h1");
  restoName.textContent = "placeholder name";
  homeDiv.appendChild(restoName);
  const addressInfo = document.createElement("div");
  const streetAddress = document.createElement("p");
  streetAddress.textContent = "123 rue yourstreet";
  addressInfo.appendChild(streetAddress);
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "(123) 456-7890";
  addressInfo.appendChild(phoneNumber);
  homeDiv.appendChild(addressInfo);
  contentDiv.appendChild(homeDiv);
};

export { genHome };
