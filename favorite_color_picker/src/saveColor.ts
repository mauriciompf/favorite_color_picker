import { colorList } from "./colorList";
import addColor from "./addColor";
import copyColor from "./utils/copyColor";
import createElement from "./utils/createElement";

const favoriteColors = document.querySelector(
  ".favorite-colors"
) as HTMLElement;
const colorListElem = document.querySelector(
  ".favorite-colors__list"
) as HTMLElement;
const deleteAllColorsButton = createElement("button", {
  class: "favorite-colors__delete-all-btn",
  type: "button",
});

export default function saveColor() {
  // Extract the current bgColor from body tag using 'style' attribute
  const currentBodyBg = window
    .getComputedStyle(document.body)
    .getPropertyValue("background-color");

  // Prevent create the same color item in favorite colors
  if (!colorList.includes(currentBodyBg)) {
    const itemList = createElement("li", {
      class: "favorite-colors__list-item",
    });
    const itemColor = createElement("div", {
      class: "favorite-colors__list-item-color",
    });
    const deleteColorButton = createElement("button", {
      class: "favorite-colors__list-item-delete-btn",
      type: "button",
    });
    const itemText = createElement("a", {
      title: "Copy color",
      class: "favorite-colors__list-item-text",
      href: "#",
    });

    itemText.textContent = currentBodyBg;
    deleteColorButton.textContent = "x";
    itemColor.style.backgroundColor = currentBodyBg;
    deleteAllColorsButton.textContent = "Delete all colors";

    itemList.appendChild(itemText); // li => a
    itemList.appendChild(itemColor); // li => div
    itemList.appendChild(deleteColorButton); // li > button
    colorListElem.appendChild(itemList); // ul => li
    colorListElem.parentElement?.appendChild(deleteAllColorsButton);

    // Copy in clipboard
    itemText.addEventListener("click", () => {
      copyColor(currentBodyBg);
    });

    // Delete a single color
    deleteColorButton.addEventListener("click", () => {
      itemList.remove();
      colorList.pop(); // Remove the current BgColor to colorList array;
    });

    // Delete all colors
    deleteAllColorsButton.addEventListener("click", function () {
      const listofColorsHTML = [...colorListElem.children];

      listofColorsHTML.forEach((element) => {
        element.remove();
      });
      this.remove();
    });

    addColor(currentBodyBg); // Add current bgColor to colorList array
    favoriteColors.classList.add("active"); // Display favorite colors
  }
}
