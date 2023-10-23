const currentBgElement = document.querySelector(
  ".current-bg__rgba"
) as HTMLSpanElement;

export default function displayCurrentBg() {
  currentBgElement.textContent = window
    .getComputedStyle(document.body)
    .getPropertyValue("background-color");
}

//  keeps an eye on changes to the page's styling.
const observer = new MutationObserver(() => {
  displayCurrentBg();
});

const observerConfig = { attributes: true, attributeFilter: ["style"] };
observer.observe(document.body, observerConfig);
