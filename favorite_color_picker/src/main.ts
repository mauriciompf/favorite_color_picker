import saveColor from "./saveColor";
import getBgColor from "./getBgColor";

const saveColorBtn = document.querySelector(
  ".btn-wrapper__save-btn"
) as HTMLButtonElement;
const nextColorBtn = document.querySelector(
  ".btn-wrapper__next-btn"
) as HTMLButtonElement;

window.addEventListener("DOMContentLoaded", getBgColor);
saveColorBtn.addEventListener("click", saveColor);
nextColorBtn.addEventListener("click", getBgColor);
