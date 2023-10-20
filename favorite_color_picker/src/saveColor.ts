import addColor from "./addColor";
import { colorList } from "./colorList";
import copyColor from "./utils/copyColor";
import createElement from "./utils/createElement";

const favoriteColors = document.querySelector(
  ".favorite-colors"
) as HTMLElement;
const colorListElem = document.querySelector(
  ".favorite-colors__list"
) as HTMLElement;

export default function saveColor() {
  // Extract the current bgColor from body tag using 'style' attribute
  const currentBodyBg = window
    .getComputedStyle(document.body)
    .getPropertyValue("background-color");

  // Prevent create the same color item in favorite colors
  if (!colorList.includes(currentBodyBg)) {
    const itemList = createElement("li", {
      class: "favorite-colors__list-item",
      title: "Copy color",
    });
    const itemColor = createElement("div", {
      class: "favorite-colors__list-item-color",
    });

    itemList.textContent = currentBodyBg;
    itemColor.style.backgroundColor = currentBodyBg;

    itemList.appendChild(itemColor); // li => div
    colorListElem.appendChild(itemList); // ul => li

    // Copy in clipboard
    itemList.addEventListener("click", () => {
      copyColor(currentBodyBg);
    });

    addColor(currentBodyBg); // Add current bgColor to colorList array
    favoriteColors.classList.add("active"); // Display favorite colors
  }
}
