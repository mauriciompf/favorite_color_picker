import saveColor from "./saveColor";
import getBgColor from "./getBgColor";

const saveBtn = document.querySelector("[data-btn1]") as HTMLButtonElement;
const nextColorBtn = document.querySelector("[data-btn2]") as HTMLButtonElement;

window.addEventListener("DOMContentLoaded", getBgColor);
saveBtn.addEventListener("click", saveColor);
nextColorBtn.addEventListener("click", getBgColor);
