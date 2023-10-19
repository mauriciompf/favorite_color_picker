import addColor from "./addColor";
import { colorList } from "./colorList";

const favWrap = document.querySelector(".fav-wrap") as HTMLElement;
const fav = document.querySelector(".fav") as HTMLElement;

export default function saveColor() {
  const getBodyBg = window
    .getComputedStyle(document.body)
    .getPropertyValue("background-color");

  if (!colorList.includes(getBodyBg)) {
    const item = document.createElement("li");
    item.setAttribute("class", "item");

    const colorItem = document.createElement("div");
    colorItem.setAttribute("class", "color-item");
    colorItem.style.backgroundColor = getBodyBg;

    item.textContent = getBodyBg;
    favWrap.classList.add("active");

    item.appendChild(colorItem);
    fav.appendChild(item);

    addColor(getBodyBg);
  }
}
