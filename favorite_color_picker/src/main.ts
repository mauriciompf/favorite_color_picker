import saveColor from "./saveColor";
import nextColor from "./nextColor";
import getBgColor from "./getBgColor";
import displayCurrentBg from "./displayCurrentBg";

const saveColorBtn = document.querySelector(
  ".btn-wrapper__save-btn"
) as HTMLButtonElement;
export const nextColorBtn = document.querySelector(
  ".btn-wrapper__next-btn"
) as HTMLButtonElement;

window.addEventListener("DOMContentLoaded", getBgColor);
window.addEventListener("DOMContentLoaded", displayCurrentBg);
saveColorBtn.addEventListener("click", saveColor);
nextColorBtn.addEventListener("click", nextColor);
