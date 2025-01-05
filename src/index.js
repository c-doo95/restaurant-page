import "./style.css";
import { genHome } from "./home.js";
import { genMenu } from "./menu.js";
import { genContact } from "./contact.js";

const homeBtn = document.querySelector("button#home");
const menuBtn = document.querySelector("button#menu");
const contactBtn = document.querySelector("button#contact");

genHome();

homeBtn.addEventListener("click", genHome);
menuBtn.addEventListener("click", genMenu);
contactBtn.addEventListener("click", genContact);
