import { colorList } from "./colorList";
import addColor from "./addColor";
import copyColor from "./utils/copyColor";
import createElement from "./utils/createElement";
import emptyColors from "./emptyColors";
import { deleteColor, deleteAllColors } from "./deleteColor";

const favoriteColors = document.querySelector(
  ".favorite-colors"
) as HTMLElement;
const colorListElem = document.querySelector(
  ".favorite-colors__list"
) as HTMLElement;
const deleteAllColorsButton = createElement(
  "button",
  undefined,
  {
    class: "favorite-colors__delete-all-btn",
    type: "button",
  },
  "Delete all colors"
);

export default function saveColor() {
  // Extract the current bgColor from body tag using 'style' attribute
  const currentBodyBg = window
    .getComputedStyle(document.body)
    .getPropertyValue("background-color");

  // Prevent create the same color item in favorite colors
  if (!colorList.includes(currentBodyBg)) {
    const itemList = createElement("li", colorListElem, {
      class: "favorite-colors__list-item",
    });
    const itemText = createElement(
      "a",
      itemList,
      {
        title: "Copy color",
        class: "favorite-colors__list-item-text",
        href: "#",
      },
      currentBodyBg
    );
    const itemColor = createElement("div", itemList, {
      class: "favorite-colors__list-item-color",
    });
    const deleteColorButton = createElement(
      "button",
      itemList,
      {
        class: "favorite-colors__list-item-delete-btn",
        type: "button",
      },
      "x"
    );

    itemColor.style.backgroundColor = currentBodyBg;
    colorListElem.parentElement?.appendChild(deleteAllColorsButton);

    // Copy in clipboard
    itemText.addEventListener("click", () => {
      copyColor(currentBodyBg);
    });

    // Delete a single color
    deleteColorButton.addEventListener("click", () => {
      deleteColor(itemList, currentBodyBg);
    });

    // Delete all colors
    deleteAllColorsButton.addEventListener("click", () => {
      deleteAllColors(deleteAllColorsButton, colorListElem);
    });

    addColor(currentBodyBg); // Add current bgColor to colorList array
    favoriteColors.classList.add("active"); // Display favorite colors

    emptyColors();
  }
}
