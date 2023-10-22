const currentBgElement = document.querySelector(
  ".current-bg__rgba"
) as HTMLSpanElement;

export default function displayCurrentBg() {
  currentBgElement.textContent = window
    .getComputedStyle(document.body)
    .getPropertyValue("background-color");
}
