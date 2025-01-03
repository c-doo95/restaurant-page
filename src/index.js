import "./styles.css";
import { genHome } from "./home.js";
import { genMenu } from "./menu.js";

const homeBtn = document.querySelector("button#home");
const menuBtn = document.querySelector("button#menu");

genHome();

homeBtn.addEventListener("click", genHome);
console.log("test");

menuBtn.addEventListener("click", genMenu);
