const genContact = () => {
  const contentDiv = document.querySelector("#content");

  contentDiv.replaceChildren();

  const contactDiv = document.createElement("div");
  contactDiv.id = 'contactDiv';
  const displayImg = new Image();
  displayImg.src =
    "https://images.unsplash.com/photo-1526069631228-723c945bea6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDI%3D";
  contactDiv.appendChild(displayImg);

  const contactBox = document.createElement("div");
  contactBox.id = 'contactBox'

  const div1 = document.createElement("div");

  const restoName = document.createElement("h1");
  restoName.textContent = "placeholder name";
  div1.appendChild(restoName);
  const streetAddress = document.createElement("p");
  streetAddress.textContent = "123 rue yourstreet";
  div1.appendChild(streetAddress);

  contactBox.appendChild(div1);

  const contactInfo = document.createElement("div");
  const reservation = document.createElement("p");
  reservation.id = "reservation";
  reservation.textContent = "To book a reservation inquire at:";
  contactInfo.appendChild(reservation);
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "(123) 456-7890";
  contactInfo.appendChild(phoneNumber);
  const email = document.createElement("p");
  email.textContent = "restaurant@email.com";
  contactInfo.appendChild(email);
  contactBox.appendChild(contactInfo);
  contactDiv.appendChild(contactBox);
  contentDiv.appendChild(contactDiv);
};

export { genContact };
