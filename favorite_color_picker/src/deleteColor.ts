import { colorList } from "./colorList";
import emptyColors from "./emptyColors";

export function deleteColor(itemList: HTMLElement, currentBodyBg: string) {
  const index = colorList.indexOf(currentBodyBg);

  // Check if the current bgColor exists in the colorList before attempting to remove it
  if (index !== -1) {
    colorList.splice(index, 1);
  }

  itemList.remove();
}

export function deleteAllColors(
  deleteAllColorsButton: HTMLButtonElement,
  colorListElem: HTMLElement
) {
  const listofColorsHTML = [...colorListElem.children];

  listofColorsHTML.forEach((element) => {
    element.remove();
  });

  colorList.splice(0, colorList.length); // Remove all elements from colorList array

  deleteAllColorsButton.remove();

  emptyColors();
}
